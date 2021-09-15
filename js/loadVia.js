function createViaModal() {
    var viaDiv = document.createElement('div');
    viaDiv.setAttribute('class', 'modal fade');
    viaDiv.setAttribute('id', 'loadViaModal');
    viaDiv.setAttribute('tabindex', '-1');
    viaDiv.setAttribute('role', 'dialog');
    viaDiv.setAttribute('aria-hidden', 'true');
    viaDiv.setAttribute('data-backdrop', 'static');
    viaDiv.innerHTML = `
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4>修改头像</h4>
            <label class="loadVia" for="fileVia">
                <img src="../images/m.0c3af3b8.png">
                <div class="btn btn-primary">上传图片</div>
                <input type="file" id="fileVia">
            </label>
            <div class="controlBtnGroup">
                <button type="button" class="btn btn-warning" data-dismiss="modal">关闭</button>
            </div>
        </div>
    </div>
</div>
`;
    document.body.appendChild(viaDiv);
}
$('#loadVia').click(function () {
    createViaModal();
    $('#loadViaModal').modal('show');
})