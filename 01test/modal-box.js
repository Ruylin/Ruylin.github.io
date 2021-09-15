// 模态框打开关闭
function addcls() {
    $('#myModal').modal("show")
    $('.closer').on('click', function () {
        if (confirm("是否确认关闭")) {
            $('#myModal').modal("hide")
        } else {
            $('#myModal').modal("show")
        }
    })
}
// input输入内容长度显示
function getLonger(item, index, num, right) {
    let items = document.querySelector(item)
    let indexs = document.querySelector(index)
    items.onkeyup = () => {
        let long = items.value.length
        indexs.innerHTML = ''
        indexs.innerHTML = long + '/' + num
        items.setAttribute('maxlength', num)
    }
    items.parentNode.style.position = 'relative'
    indexs.style.cssText = 'position: absolute; right: ' + right + '%; top:7px;color: #ccc; '
}
// 输入限值和警告
function yanz() {
    if ($('form').bootstrapValidator == undefined) {
        return 0
    }
    $('form')
        .bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    message: 'The username is not valid',
                    validators: {
                        notEmpty: {
                            message: '内容不能为空'
                        },
                        stringLength: {
                            min: 0,
                            max: 20,
                            message: '账号要在3-11之间'
                        },
                        /*remote: {
                            url: 'remote.php',
                            message: 'The username is not available'
                        },*/
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/,
                            message: '账号格式错误！'
                        }
                    }
                },
                phonename: {
                    message: 'The username is not valid',
                    validators: {
                        notEmpty: {
                            message: '手机号号不能为空'
                        },
                        stringLength: {
                            min: 11,
                            max: 11,
                            message: '请输入正确的手机号'
                        },
                        /*remote: {
                            url: 'remote.php',
                            message: 'The username is not available'
                        },*/
                        regexp: {
                            regexp: /^[0-9]+$/,
                            message: '手机号格式错误！'
                        }
                    }
                },
                Chinese: {
                    message: 'The username is not valid',
                    validators: {
                        notEmpty: {
                            message: '名字不能为空'
                        },
                        // stringLength: {
                        //     min: 11,
                        //     max: 11,
                        //     message: '请输入正确的手机号'
                        // },
                        /*remote: {
                            url: 'remote.php',
                            message: 'The username is not available'
                        },*/
                        regexp: {
                            regexp: /^[\u4e00-\u9fa5]+$/,
                            message: '请输入汉字！'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required and can\'t be empty'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: '此项不能为空'
                        }
                    }
                }
            }
        })
}
// 封装右上角三个模态框
function person(x, y, z) {
    $(x).on('click', function () {
        $('.modal-dialog').html(`<div class="modal-content col-md-offset-3" style="width:950px;margin:50px 0 0 -170px;">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">用户详情</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <div class="form-horizontal " id="User">
                <div class="form-group">
                  <p class=" col-md-11 text-left" for="username">登录账号:</p>
                </div>
                <hr class="col-md-11">
                <div class="form-group">
                  <p class=" col-md-11 text-left" for="username">区域:</p>
                </div>
                <hr class="col-md-11">
                <div class="form-group">
                  <p class=" col-md-11 text-left" for="username">姓名:</p>
                </div>
                <hr class="col-md-11">
                <div class="form-group">
                  <p class=" col-md-11 text-left" for="username">身份证号码:</p>
                </div>
                <hr class="col-md-11">
                <div class="form-group">
                  <p class=" col-md-11 text-left" for="username">手机号码:</p>
                </div>
                <hr class="col-md-11">
                <div class="form-group">
                  <p class=" col-md-11 text-left" for="username">身份:</p>
                </div>
                <hr class="col-md-11">
                <div class="form-group">
                  <p class=" col-md-11 text-left" for="username">会员状态:</p>
                </div>
                <hr class="col-md-11">
                <div class="form-group">
                  <p class=" col-md-11 text-left" for="username">注册时间:</p>
                </div>
                <hr class="col-md-11">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning closer" data-dismiss="modal">关闭</button>
        </div>
      </div>`)
        addcls()
    })


    $(y).on('click', function () {
        $('.modal-dialog').html(`<div class="modal-content col-md-offset-3" style="width:950px;margin-left: -170px;">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
      <h4 class="modal-title" id="myModalLabel">修改头像</h4>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-md-6 headshow">
          <div class="col-md-12"><img src="./img/background.png" alt="">
          <button class="btn btn-primary">上传图片</button></div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-warning closer" data-dismiss="modal">关闭</button>
    </div>
  </div>`)
        addcls()
    })


    $(z).on('click', function () {
        $('.modal-dialog').html(`<div class="modal-content" style="width:800px;margin-left:-170px;">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">创建计划</h4>
    </div>
    <form id="defaultForm" method="post" class="form-horizontal" action="ajaxSubmit.php">
        <div class="modal-body">
            <div class="form-group information phonenum account">
                <label class=" control-label"> <p><sup>*</sup>计划名称</p> </label>
                <div class="phonenum">
                      <input type="text" class="form-control" name="username"><span>0/20</span>
                </div>
            </div>            
            <div class="form-group information getit ">
                <label class=" control-label"> <p><sup>*</sup>采集时间</p> </label>
                <div class="phonenum">
                    <input type="password" class="form-control" name="password" placeholder="采集开始时间">
                    <input type="password" class="form-control" name="password" placeholder="采集结束时间">
                </div>
            </div>
            <div class="form-group information password1">
                <label class="control-label"><p><sup>*</sup>采集区域</p></label>
                <input type="password" class="form-control" name="password"><button class="btn btn-warning">全体</button><button class="btn btn-warning">取消全体</button>
            </div>
            <div class="form-group information password2">
                <label class=" control-label "><p><sup>*</sup>采集要求</p></label>
                <textarea type="password" class="form-control" name="password" placeholder="输入采集要求"></textarea> <span>0/255</span>
            </div> 
            <div class="form-group information password3">
                <input type="file" class="form-control" name="password">
            </div> 
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-success closer" >关闭</button>
            <button type="submit" class="btn btn-primary">提交更改</button>
        </div>
    </form>
</div>`)
        $('this').html(`<a href="#" class="forgetpass monik" data-toggle="modal" data-target="#myModal">修改密码</a>`)
        $('.information').css({ 'margin-bottom': '25px' })
        $('.information small').css({ ' margin-left': '100px' })
        $('.information label').css({ 'float': 'left', 'margin-right': '20px' })
        $('.information sup').css({ 'color': 'red', 'margin-right': '3px' })
        $('.information p').css({ 'width': '80px', ' margin-top': '3px' })
        $('.information input').css({ 'width': '75%', 'height': '40px' })
        $('.getit input').css({ 'width': '25%', 'float': 'left', 'margin-right': '15px' })
        $('.password1 input').css({ 'width': '25%', 'float': 'left' })
        $('.password1 button').css({ 'height': '40px', 'margin-left': '15px' })
        $('.password1 .glyphicon-ok,.glyphicon-remove').css({ 'transform': 'translateY(-20px) !important' })
        $('.password2 textarea').css({ 'width': '75%' })
        $('.modal-content form').css({ 'padding': '50px' })
        $('.password3 input').css({ 'width': '220px', 'height': '200px', 'line-height': '180px', 'text-align': 'center', 'margin-left': '100px' })
        addcls()
        yanz()
        getLonger('.account input', '.account span', 20, 13)
        getLonger('.password2 textarea', '.password2 span', 255, 13)
    })
}
function myplanx(params, x) {
    $(params).on('click', function () {
        $('.modal-dialog').html(`
      <div class="modal-content col-md-offset-3" style="width:800px;margin-left: -50px;">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">达萨达</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <form id="defaultForm" method="post" class="form-horizontal dasada col-md-12" action="ajaxSubmit.php" style="width:98%;margin:15px;padding:15px 0 0 30px;border:1px solid #ccc">
              <div class="modal-body ">
                  <div class="form-group">
                      <label > <p><sup>*</sup>计划名称</p> </label>
                      <div class="tplannm">
                            <input type="text" class="form-control" name="password" style="width: 550px;"><span>0/20</span>
                      </div>
                  </div>                      
                  <div class="form-group">
                      <label><p><sup>*</sup>采集区域</p></label>
                      <select class="form-control" style="width: 250px;" name="password"></select>
                      <button class="btn btn-warning" style="margin: 0 15px;">全体</button><button class="btn btn-warning">取消全体</button>
                  </div>
                  <div class="form-group collect-ask">
                      <label><p><sup>*</sup>采集要求</p></label>
                      <textarea type="password" class="form-control" style="width: 550px;" name="password" placeholder="输入采集要求"></textarea> <span>0/255</span>
                  </div> 
                  <div class="form-group">
                      <input type="file" class="form-control"  style="width: 300px;height: 250px;">
                  </div> 
              </div>
              <div class="modal-footer">
                  <button type="reset" class="btn btn-success" >取消</button>
                  <button type="submit" class="btn btn-primary">提交更改</button>
              </div>
          </form>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning closer">关闭</button>
        </div>
      </div>`)
        addcls()
        yanz()
        getLonger('.tplannm input', '.tplannm span', 20, 2)
        getLonger('.collect-ask textarea', '.collect-ask span', 20, 13)
        $('[type="text"], select').css({ 'height': '40px' })
        $('.tplannm span').css({ "top": "10px" })
        $('.dasada .form-group').css({ 'display': 'flex', 'width': '100%' })
        $('.dasada label').css({ 'width': '80px', 'margin-right': '15px', 'font-weight': 'normal' })
    })
    $(x).on('click', function () {
        $('.modal-dialog').html(`
    <div class="modal-content col-md-offset-3" style="width:800px;margin-left: -50px;">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
      <h4 class="modal-title" id="myModalLabel">图斑地块审核</h4>
    </div>
    <div class="modal-body">
      <div class="row">
        <form id="defaultForm" method="post" class="form-horizontal tbds " action="ajaxSubmit.php" style="width:750px;border: 1px #ccc solid; margin: 15px; padding: 15px 30px;">
          <div class="modal-body ">
            <div class="form-group">
              <label>
                <p>图斑ID</p>
              </label>
              <input type="text" class="form-control"  style="width: 700px;">
            </div>
            <div class="form-group">
              <label>
                <p>地块名</p>
              </label>
                <input type="text" class="form-control"  style="width: 700px;">
            </div>
            <div class="form-group">
              <label>
                <p>面积</p>
              </label>
                <input type="text" class="form-control"  style="width: 700px;">
            </div>
            <div class="form-group">
              <label>
                <p>镇名</p>
              </label> 
                <input type="text" class="form-control"  style="width: 700px;">
              </div>
            <div class="form-group">
              <label>
                <p>村名</p>
              </label>  
                <input type="text" class="form-control"  style="width: 700px;">
            </div>
            <div class="form-group">
              <label>
                <p>审核状态</p>
              </label>
              <label for="ture" class="label-control"><input type="radio" id="true" name="true"> 通过 </label>
              <label for="fales"><input type="radio" id="fales" name="true"> 不通过 </label>
              </div>
              <div class="form-group">
                <label><p>审核描述</p></label>
                <textarea type="password" class="form-control" style="width: 700px;" name="password" ></textarea> 
            </div> 
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">确定</button>
          </div>
        </form>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-warning closer" >关闭</button>
    </div>
  </div>`)
        addcls()
        $('.tbds form').css({ 'display': 'flex', 'width': '100%' })
        $('.tbds label').css({ 'width': '80px', 'margin-right': '15px', 'font-weight': 'normal' })
    })
}

function prodtx(params) {
    $(params).on('click', function () {
        $('.modal-dialog').html(`
        <div class="modal-content col-md-offset-3" style="width:1450px;margin-left: -370px;">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">图斑信息-地塘快信息</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <form id="defaultForm" method="post" class="form-horizontal dtxx col-md-12" action="ajaxSubmit.php"
              style="display: flex;width: 98%;margin: 15px;padding: 15px 0 0 30px ; border: 1px #ccc solid;">
              <div class="modal-body ">
                <div class="form-group">
                  <label>
                    <p>图斑ID</p>
                  </label>
                  <input type="text" class="form-control" name="" placeholder="NHQ45844">
                </div>
                <div class="form-group">
                  <label>
                    <p>镇街</p>
                  </label>
                  <input type="text" class="form-control" name="">
                </div>
                <div class="form-group">
                  <label>
                    <p>村小组/经济社</p>
                  </label>
                  <input type="text" class="form-control" name="">
                </div>
                <div class="form-group">
                  <label>
                    <p>土地性质</p>
                  </label>
                  <input type="text" class="form-control" name="" placeholder="没有数据源">
                </div>
                <div class="form-group">
                  <label>
                    <p>村居审查现状</p>
                  </label>
                  <input type="text" class="form-control" name="">
                </div>
                <div class="form-group">
                  <label>
                    <p>审核描述</p>
                  </label>
                  <input class="form-control" type="text" style="width:270px;position:relative;right:30px"><select class="form-control"
                    style="width: 80px;"></select>
                </div>
              </div>
              <div class="modal-body ">
                <div class="form-group">
                  <label>
                    <p>地塘块命名</p>
                  </label>
                  <input type="text" class="form-control" name="" placeholder="九江镇-河清村-鱼塘-592">
                </div>
                <div class="form-group">
                  <label>
                    <p>村居</p>
                  </label>
                  <select class="form-control"></select>
                </div>
                <div class="form-group">
                  <label>
                    <p>大棚</p>
                  </label>
                  <input type="checkbox" style=" transform: translate(-18px,10px);" value="无"><label>
                  <p>无</p>
                </label>
                </div>
                <div class="form-group">
                  <label>
                    <p>土地现状</p>
                  </label>
                  <input type="text" class="form-control" name="">
                </div>
                <div class="form-group">
                  <label>
                    <p>品种</p>
                  </label>
                  <input type="text" class="form-control" name="">
                </div>
                <div class="form-group">
                  <label>
                    <p>面积（亩）</p>
                  </label>
                  <input class="form-control" type="text" style="width:270px;position:relative;right:30px"><select class="form-control"
                    style="width: 80px;"></select>
                </div>
              </div>
              <div class="modal-body ">
                <div><img style="width: 300px;height: 250px;" src="./img/background.png" alt=""></div>
                <button class="btn btn-info" style="width: 300px;height: 40px;margin-top: 25px;">上传照片</button>
              </div>
          </div>
          <div style="width: 100%;">
            <div class="modal-header">
              <h4 class="modal-title" id="myModalLabel">所属主体</h4>
            </div>
            <table class="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <td>主体名称</td>
                  <td>基地/土名</td>
                  <td>占地面积(亩)</td>
                  <td>年产值(万元)</td>
                  <td>承包开始时间</td>
                  <td>承包结束时间</td>
                  <td>承包年限</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>刘志军</td>
                  <td>西樵镇数据采集08231141</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">确定</button>
          </div>
          </form>
        </div>
      </div>
      <div class="modal-footer col-md-12" style="margin-left: -200px;">
        <button type="button" class="btn btn-warning closer" >关闭</button>
      </div>
    </div>`)
        addcls()
        $('[type="text"], select').css({ 'height': '40px' })
        $('.dtxx .form-group').css({ 'display': 'flex', 'width': '100%' })
        $('.dtxx label').css({ 'width': '150px', 'margin-right': '15px', 'font-weight': 'normal', 'height': '40px', 'line-height': '40px' })
    })
}
function infmtionx(params, x) {
    $(params).on('click', function () {
        $('.modal-dialog').html(`
        <div class="modal-content col-md-offset-3" style="width:800px;margin-left: -170px;">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">采集人员</h4>
        </div>
        <div class="modal-body" >
          <div class="row">
            <form id="defaultForm"  method="post" class="form-horizontal collection col-md-12" action="ajaxSubmit.php">
              <div class="modal-body ">
                  <div class="form-group">
                      <div style="display:flex;align-items:center;" class="telephone">
                          <p>姓名</p><input type="text" class="form-control" name="" style="width: 250px;margin-right: 15px;">
                          <p><sup>*</sup>手机号码</p><input type="text" class="form-control" name="password" style="width: 250px;"><span>0/11</span>
                      </div>
                  </div>     
                  <div class="form-group">
                    <div style="display: flex;align-items: center;" class="tplannm2">
                        <p><sup>*</sup>身份证号</p><input type="text" class="form-control" name="username" style="width: 595px;"><span>0/18</span>
                    </div>
                </div> 
                <div class="form-group">
                  <div style="display: flex;align-items: center;">
                    <p>角色</p> <select  class="form-control" style="width: 250px;">
                      <option selected hidden disabled>镇级</option>
                    </select>
                  </div>
              </div>  
                     
              </div>
              <div style="margin:0 auto; width:90px;">
                  <button type="submit" class="btn btn-success" style="width: 80px;">确定</button>   
              </div>
          </form>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning closer">关闭</button>
        </div>
      </div>`)
        addcls()
        yanz()
        $('[type="text"], select').css({ 'height': '40px' })
        $('.tplannm span').css({ "top": "10px" })
        $('.collection p').css({ 'width': '80px' })
        $('.collection .form-group').css({ 'margin-bottom': '25px' })
        getLonger('.telephone input:nth-child(2)', '.telephone span', 20, 14)
        getLonger('.tplannm2 input', '.tplannm2 span', 20, 14)
    })
    $(x).on('click', function () {
        $('.modal-dialog').html(`
        <div class="modal-content col-md-offset-3" style="width:800px;margin-left: -170px;">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">属性类别分析</h4>
        </div>
        <div class="modal-body" >
          <div class="row">
            <form id="defaultForm"  method="post" class="form-horizontal collection col-md-12" action="ajaxSubmit.php">
              <div class="modal-body ">      
                  <div class="form-group">
                    <div style="display: flex;align-items: center; " class="telephone">
                        <p><sup>*</sup>属性类别</p><input type="text" class="form-control" name="password" style="width: 650px;"><span>0/12</span>
                   </div>
                  </div> 
                  <div class="form-group">
                    <div style="display: flex;align-items: center;"  class="telephone2">
                        <p><sup>*</sup>属性类别编码</p><input type="text" class="form-control" name="password" style="width: 650px;"><span>0/12</span>
                   </div>
                  </div> 
                  <div class="form-group">
                    <div style="display: flex;align-items: center;"class="telephone3">
                        <p><sup>*</sup>属性类别描述</p><textarea class="form-control" name="password" style="width: 650px;"></textarea><span>0/120</span>
                   </div>
                  </div> 
                     
              </div>
              <div style="margin:0 auto; width:90px;">
                  <button type="submit" class="btn btn-success" style="width: 80px;">确定</button>   
              </div>
          </form>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning closer">关闭</button>
        </div>
      </div>`)
        addcls()
        yanz()
        $('[type="text"], select').css({ 'height': '40px' })
        $('.collection p').css({ 'width': '150px' })
        $('.collection .form-group').css({ 'margin-bottom': '25px' })
        getLonger('.telephone input', '.telephone span', 12, 4)
        getLonger('.telephone2 input', '.telephone2 span', 12, 4)
        getLonger('.telephone3 textarea', '.telephone3 span', 120, 4)
    })
}

function magementx(params, x, y) {
    $(params).on('click', function () {
        $('.modal-dialog').html(`
            <div class="modal-content col-md-offset-3" style="width:800px;margin-left: -170px;">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">属性类别分析</h4>
        </div>
        <div class="modal-body" >
          <div class="row">
            <form id="defaultForm"  method="post" class="form-horizontal collection col-md-12" action="ajaxSubmit.php">
              <div class="modal-body ">
                <div class="form-group">
                  <div style="display: flex;align-items: center;" class="magename" >
                      <p><sup>*</sup>机构名称</p>
                      <input type="text" class="form-control" name="username" style="width: 650px;"><span>0/10</span>
                 </div>
                </div> 
                  <div class="form-group">
                    <div style="display: flex;align-items: center;" class="magename2">
                        <p><sup>*</sup>机构简称</p><input type="text" class="form-control" name="password" style="width: 650px;"><span>0/10</span>
                   </div>
                  </div> 
                  <div class="form-group">
                    <div style="display: flex;align-items: center;">
                        <p><sup>*</sup>上级机构</p><select  class="form-control" name="password" style="width: 300px;"></select>
                   </div>
                  </div> 
                  <div class="form-group">
                    <div style="display: flex;align-items: center;" class="magename3">
                        <p><sup>*</sup>机构编码</p><input type="text" class="form-control" name="password" style="width: 650px;"><span>0/64</span>
                   </div>
                  </div> 
                  <div class="form-group">
                    <div style="display: flex;align-items: center;"  class="magename4">
                        <p><sup>*</sup>联系人</p><input type="text" class="form-control" name="username" style="width: 650px;"><span>0/15</span>
                   </div>
                  </div> 
                  <div class="form-group">
                    <div style="display: flex;align-items: center;" class="magename5">
                        <p><sup>*</sup>联系电话</p><input type="text" class="form-control" name="phonename" style="width: 650px;"><span>0/11</span>
                   </div>
                  </div> 
                  <div class="form-group">
                    <div style="display: flex;align-items: center;">
                        <p><sup>*</sup>所在地址</p><select  class="form-control" name="password" style="width: 300px;"></select>
                   </div>
                  </div> 
                  <div class="form-group">
                    <div style="display: flex;align-items: center;" class="magename6">
                        <p><sup>*</sup>详细地址</p><input type="text" class="form-control" name="password" style="width: 650px;"><span>0/150</span>
                   </div>
                  </div> 
                  <div class="form-group">
                    <div style="display: flex;align-items: center;" class="magename7">
                        <p><sup>*</sup>备注</p><textarea class="form-control" name="password" style="width: 650px;"></textarea><span>0/255</span>
                   </div>
                  </div>               
              </div>
              <div>
                  <button type="reset" class="btn btn-muted " >取消</button>   
                  <button type="submit" class="btn btn-primary " >保存</button>   
              </div>
          </form>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning closer" >关闭</button>
        </div>
      </div>`)
        addcls()
        yanz()
        $('.collection p').css({ 'width': '80px' })
        $('.collection .form-group').css({ 'margin-bottom': '25px' })
         getLonger('.magename input', '.magename span', 10, 6)
         getLonger('.magename2 input', '.magename2 span', 10, 6)
         getLonger('.magename3 input', '.magename3 span', 64, 6)
         getLonger('.magename4 input', '.magename4 span', 15, 6)
         getLonger('.magename5 input', '.magename5 span', 11, 6)
         getLonger('.magename6 input', '.magename6 span', 150, 6)
        getLonger('.magename7 textarea', '.magename7 span', 255, 6)
         

    })
    $(x).on('click', function () {
        $('.modal-dialog').html(`
            <div class="modal-content col-md-offset-3" style="width:800px;margin-left: -170px;">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="myModalLabel">新建角色</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <form id="defaultForm"  method="post" class="form-horizontal collection col-md-12" action="ajaxSubmit.php">
                  <div class="modal-body">  
                      <div class="form-group">
                        <div style="display: flex;align-items: center;" class="magename">
                            <p><sup>*</sup>角色编号</p><input type="text" class="form-control" name="password" style="width: 300px;" value="XTGLY"><span>0/12</span>
                       </div>
                      </div> 
                      <div class="form-group">
                        <div style="display: flex;align-items: center;" class="magename2">
                            <p><sup>*</sup>角色名称</p><input type="text" class="form-control" name="username" style="width: 300px;" value="系统管理员"><span>0/12</span>
                       </div>
                      </div> 
                      <div class="form-group">
                        <div style="display: flex;align-items: center;" class="magename3">
                            <p>角色描述</p><textarea class="form-control"  style="width: 300px;">系统管理员</textarea><span>0/150</span>
                       </div>
                      </div> 
                         
                  </div>
                  <div style="margin:0 auto; width:90px;">
                      <button type="submit" class="btn btn-success" style="width: 80px;">确定</button>   
                  </div>
              </form>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning closer" >关闭</button>
            </div>
          </div>`)
        addcls()
        yanz()
        $('.collection p').css({ 'width': '150px' })
        $('.collection .form-group').css({ 'margin-bottom': '25px' })
        getLonger('.magename input', '.magename span', 12, 43)
        getLonger('.magename2 input', '.magename2 span', 12, 43)
        getLonger('.magename3 textarea', '.magename3 span', 150, 43)
    })
    $(y).on('click', function () {
        $('.modal-dialog').html(`
            <div class="modal-content col-md-offset-3" style="width:800px;margin-left: -170px;">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">新建用户</h4>
        </div>
        <div class="modal-body" >
          <div class="row">
            <form id="defaultForm"  method="post" class="form-horizontal collection col-md-12" action="ajaxSubmit.php">
              <div class="modal-body ">
                  <div class="form-group">
                      <div style="display: flex;align-items: center;">
                          <p><sup>*</sup>账号</p>  <div class="magename3"><input type="text" class="form-control" name="username" style="width: 250px;margin-right: 15px;"><span>0/11</span></div>
                          <p><sup>*</sup>姓名</p> <div class="magename4"><input type="text" class="form-control" name="username" style="width: 250px;"><span>0/15</span></div>
                      </div>
                  </div>
                  <div class="form-group">
                    <div style="display: flex;align-items: center;">
                        <p><sup>*</sup>密码</p>  <input type="text" class="form-control" name="password" style="width: 250px;margin-right: 15px;">
                        <p><sup>*</sup>确认密码</p><input type="text" class="form-control" name="password" style="width: 250px;">
                    </div>
                </div>
                <div class="form-group">
                  <div style="display: flex;align-items: center;">
                    <input type="radio" style="margin: -10px 5px 0 0;">
                      <p><sup>*</sup>组织机构</p><select class="form-control" name="password" style="width: 250px;">
                      <option selected hidden disabled>请选择</option></select>
                  </div>
                </div>  
                <div class="form-group">
                  <div style="display: flex;align-items: center;">
                    <input type="radio" style="margin: -10px 5px 0 0;">
                      <p><sup>*</sup>选择镇街</p><select class="form-control" name="password" style="width: 238px;margin-right: 15px;">
                      <option selected hidden disabled>请选择</option></select>
                      <p><sup>*</sup>选择村居</p><select class="form-control" name="password" style="width: 238px;">
                        <option selected hidden disabled>请选择</option></select>
                  </div>
                </div>      
                  <div class="form-group">
                    <div style="display: flex;align-items: center;" class="magename">
                        <p><sup>*</sup>联系方式</p><input type="text" class="form-control" name="password" style="width: 640px;"><span>0/11</span>
                    </div>
                </div> 
                <div class="form-group">
                  <div style="display: flex;align-items: center;" class="magename2">
                      <p><sup>*</sup>身份证号</p><input type="text" class="form-control" name="password" style="width: 640px;"><span>0/18</span>
                  </div>
              </div> 
              <div class="form-group">
                <div style="display: flex;align-items: center;">
                    <p><sup>*</sup>身份等级</p><select class="form-control" name="password" style="width: 250px;margin-right: 15px;">
                    <option selected hidden disabled>请选择</option></select>
                    <p><sup>*</sup>角色</p><select class="form-control" name="password" style="width: 250px;">
                      <option selected hidden disabled>请选择</option></select>
                </div>
              </div> 
                     
              </div>
              <div style="margin:0 auto; width:90px;">
                  <button type="submit" class="btn btn-primary " style="width: 80px;">保存</button>   
              </div>
          </form>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning closer">关闭</button>
        </div>
      </div>`)
        addcls()
        yanz()
        $('.collection p').css({ 'width': '120px',"text-align":"center" })
        $('.collection .form-group').css({ 'margin-bottom': '25px' })
        getLonger('.magename input', '.magename span', 11, 4)
        getLonger('.magename2 input', '.magename2 span', 18, 4)
        getLonger('.magename3 input', '.magename3 span', 11, 8)
        getLonger('.magename4 input', '.magename4 span', 11, 8)
    })
}

