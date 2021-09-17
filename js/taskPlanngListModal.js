function modifyTaskModal() {
    $('#taskPlanTbody').on('click', 'a', function () {
        let tMbody = document.getElementById('taskPlanModalBody');
        let headTr = $('#taskPlanHead').children();
        let nowTr = $(this).parent().parent().children();

        if (this.className === 'chose1') {
            $('#taskPlanModealTitle').html('提示');
            $('#taskPlanModalBody').html(`是否${this.textContent}此任务计划？`);
            $('#taskPlanModal').modal('show');
        };
        if (this.className === 'chose2') {
            $('#taskPlanModealTitle').html('提示');
            $('#taskPlanModalBody').html(`是否${this.textContent}此任务计划？？`);
            $('#taskPlanModal').modal('show');
        };
        if (this.className === 'chose3') {
            tMbody.innerHTML = '';
            $('#taskPlanModealTitle').html(nowTr.eq(1).text());
            let oform = document.createElement('form');
            oform.classList.add('form')
            for (let i = 0; i < nowTr.length - 1; i++) {
                let oDiv = document.createElement('div');
                oDiv.classList.add('form-group');
                oDiv.innerHTML = `
                    <label style="display: flex;line-height: 34px;">
                        <span style="text-align: right;width: 100px;">${headTr.eq(i).text()}：</span>
                        <div style="display:inline-block;flex: auto;">
                            <input disabled type="text" class="form-control" value="${nowTr.eq(i).text()}">
                        </div>
                    </label>
                `;
                oform.appendChild(oDiv)
            }
            tMbody.appendChild(oform);
            $('#taskPlanModal').modal('show');
        };
        if (this.className === 'chose4') {
            tMbody.innerHTML = '';
            $('#taskPlanModealTitle').html(nowTr.eq(1).text());
            let oform = document.createElement('form');
            oform.classList.add('form')
            for (let i = 0; i < nowTr.length - 1; i++) {
                let oDiv = document.createElement('div');
                oDiv.classList.add('form-group');
                oDiv.innerHTML = `
                    <label style="display: flex;line-height: 34px;">
                        <span style="text-align: right;width: 100px;">${headTr.eq(i).text()}：</span>
                        <div style="display:inline-block;flex: auto;">
                            <input type="text" class="form-control" value="${nowTr.eq(i).text()}">
                        </div>
                    </label>
                `;
                oform.appendChild(oDiv)
            }
            tMbody.appendChild(oform);
            $('#taskPlanModal').modal('show');
        };
        if (this.className === 'chose5') {
            nowTr.parent().remove()
        }
    })
}
modifyTaskModal()