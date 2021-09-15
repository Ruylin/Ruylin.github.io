function createPersonalInfo() {
    var personalInfoDiv = document.createElement('div');
    personalInfoDiv.setAttribute('class', 'modal fade');
    personalInfoDiv.setAttribute('id', 'personalInfoModal');
    personalInfoDiv.setAttribute('tabindex', '-1');
    personalInfoDiv.setAttribute('role', 'dialog');
    personalInfoDiv.setAttribute('aria-hidden', 'true');
    personalInfoDiv.setAttribute('data-backdrop', 'static');
    personalInfoDiv.innerHTML = `
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4>用户详情</h4>
            <div class="personalInfoBody">
                <div class="personalInfoItem">
                    <span>登录账号：</span>
                    <span></span>
                </div>
                <div class="personalInfoItem">
                    <span>区域：</span>
                    <span></span>
                </div>
                <div class="personalInfoItem">
                    <span>姓名：</span>
                    <span></span>
                </div>
                <div class="personalInfoItem">
                    <span>身份证号码：</span>
                    <span></span>
                </div>
                <div class="personalInfoItem">
                    <span>手机账号：</span>
                    <span></span>
                </div>
                <div class="personalInfoItem">
                    <span>身份：</span>
                    <span></span>
                </div>
                <div class="personalInfoItem">
                    <span>会员状态：</span>
                    <span>0</span>
                </div>
                <div class="personalInfoItem">
                    <span>注册时间：</span>
                    <span></span>
                </div>
            </div>
            <div class="controlBtnGroup">
                <button type="button" class="btn btn-warning" data-dismiss="modal">关闭</button>
            </div>
        </div>
    </div>
</div>
`;
    document.body.appendChild(personalInfoDiv);
}
$('#personalInfo').click(function () {
    createPersonalInfo();
    $('#personalInfoModal').modal("show");
})