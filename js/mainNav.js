document.getElementById('mainNav').innerHTML = `
<div class="container-fluid min-width topNav">
        <ul class="nav nav-pills col-md-12 mainNav">
            <li class="col-xs-2">
                <h4>渔业资源管理系统</h4>
            </li>
            <li class="col-xs-6">
                <ul class="nav nav-pills col-xs-12 navBar">
                    <li>
                        <a href="../index/index.html">GIS控制台</a>
                    </li>
                    <li>
                        <a href="../TaskPlan/TaskPlanningList.html">计划任务管理</a>
                    </li>
                    <li>
                        <a href="../DataResource/ProductionBase.html">生产主体库</a>
                    </li>
                    <li>
                        <a href="../NamedManagement/Rule.html">命名管理</a>
                    </li>
                    <li>
                        <a href="../BasicInfo/DivisionManagement.html">基础信息管理</a>
                    </li>
                    <li>
                        <a href="../System/Organization.html">系统管理</a>
                    </li>
                </ul>
            </li>
            <li class="col-xs-2"></li>
            <li class="dropdown ">

                <a class="dropdown-toggle aaa" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                    aria-expanded="false">
                    <img src="../images/m.0c3af3b8.png" style="width: 20px">
                    &nbsp;区级信息员:admin <span class="glyphicon glyphicon-menu-down"></span>
                </a>
                <ul class="dropdown-menu topNavDropMenu">
                    <li><a href="#" id="personalInfo" class="btn">个人信息</a></li>
                    <li><a href="#" id="loadVia" class="btn">修改头像</a></li>
                    <li class="forget-password"><a href="#" class="btn">修改密码</a></li>
                    <li class="divider"></li>
                    <li><a disabled href="#" class="btn">切换到种植系统</a></li>
                    <li class="divider"></li>
                    <li><a id="logOutSystem" href="#" class="btn">退出</a></li>
                    <li class="divider"></li>
                    <li><a disabled href="#" class="btn">清除系统缓存</a></li>
                </ul>
            </li>
        </ul>
    </div>
`;
$('#logOutSystem').click(function () {
    localStorage.removeItem('userInfo');
    location.href = '../login/login.html';
})