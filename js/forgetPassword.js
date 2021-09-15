$(document).ready(function () {
    function createForgetPasswordModal() {
        var oDiv = document.createElement('div');
        oDiv.setAttribute('class', 'modal fade');
        oDiv.setAttribute('id', 'forgetPassWordModal');
        oDiv.setAttribute('tabindex', '-1');
        oDiv.setAttribute('role', 'dialog');
        oDiv.setAttribute('aria-labelledby', 'myModalLabel');
        oDiv.setAttribute('aria-hidden', 'true');
        oDiv.setAttribute('data-backdrop', 'static');
        oDiv.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="myModalLabel">忘记密码</h4>
                    </div>
                <div class="modal-body">
                <form action="" method="POST" role="form" class="form-horizontal" id="modalForm">
                    <div class="form-group">
                        <label class="col-md-3 control-label">
                            <span class="text-danger">*</span>
                            手机号码
                        </label>
                        <div class="col-md-8 modalPhoneDiv">
                            <input type="text" class="form-control" name="phone" required autocomplete="off" />
                            <span class="wordLengtH">0/11</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 col-xs-3 control-label">
                            <span class="text-danger">*</span>
                            验证码
                        </label>
                        <div class="col-xs-4">
                            <input type="text" class="form-control" name="authCode" required autocomplete="off"
                                data-bv-notempty-message="验证码不能为空" />
                        </div>
                        <div class="col-xs-4">
                            <button type="button" class="btn btn-default">获取验证码</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-lg-3 control-label">
                            <span class="text-danger">*</span>
                            密码
                        </label>
                        <div class="col-lg-8">
                            <input type="password" class="form-control" name="password" required
                                data-bv-notempty-message="密码不能为空" data-bv-identical="true"
                                data-bv-identical-field="confirmPassword" data-bv-identical-message="两次输入密码不一致!"
                                data-bv-different="true" data-bv-different-field="username"
                                data-bv-different-message="密码不能与用户名重复" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-lg-3 control-label">
                            <span class="text-danger">*</span>
                            确认密码
                        </label>
                        <div class="col-lg-8">
                            <input type="password" class="form-control" name="confirmPassword" required
                                data-bv-notempty-message="密码不能为空" data-bv-identical="true"
                                data-bv-identical-field="password" data-bv-identical-message="两次输入密码不一致!"
                                data-bv-different="true" data-bv-different-field="username"
                                data-bv-different-message="密码不能与用户名重复" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-6 col-md-offset-6">
                            <button type="button" class="btn btn-warning col-md-offset-4"
                                id="closeForgetPassWordModal">关闭</button>
                            <button type="submit" class="btn btn-info col-md-offset-1">修改</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>`;
        document.body.appendChild(oDiv);
    };
    createForgetPasswordModal();
    $('#modalForm')
        .bootstrapValidator(
            {
                message: '该值无效',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    phone: {
                        validators: {
                            notEmpty: {
                                message: '手机号不能为空'
                            },
                            regexp: {
                                regexp: /^1(3|4|5|7|8)\d{9}$/,
                                message: '手机号不符合规范',
                            }
                        }
                    }
                }
            })
        .on('success.form.bv', function (e) {
            // 阻止表单提交
            e.preventDefault();
            // 获取表单实例
            var $form = $(e.target);
            // 获取BootstrapValidator实例
            var bv = $form.data('bootstrapValidator');
            // 使用Ajax提交表单数据
            $.post($form.attr('action'), $form.serialize(), function (result) {
                console.log(result);
            }, 'json');
        });
    $('#closeForgetPassWordModal').click(() => {
        if (confirm('确认关闭？')) {
            $('#forgetPassWordModal').modal("hide");
        }
    });

    $(".forget-password").click(() => {
        $('#forgetPassWordModal').modal("show");
    });
    getLength('.modalPhoneDiv input', '.modalPhoneDiv span', 11);
});


