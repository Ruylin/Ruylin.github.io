function getTaskPlanInfo(pageNum = 1, pageSize = 10) {
    // pageNum == null ? 1 : pageNum;
    let data = new URLSearchParams();
    axios({
        url: "http://192.168.104.217:8280/task/task/queryPlanAccordingToTheTask",
        method: "get",
        data: data,
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTGV2ZWwiOjIsImFkbWluaXN0cmF0aXZlQ29kZSI6IjQ0MDYwNTAxMSIsInVzZXJfaWQiOjEsInVzZXJfbmFtZSI6ImFkbWluIiwic2NvcGUiOlsiYWxsIl0sImxvZ2luTmFtZSI6ImFhYSIsIlVzZXJJZGVudGl0eSI6WyLljLrnrqHnkIblkZgiXSwiZXhwIjoxNjU3MzI1MTI0LCJhdXRob3JpdGllcyI6WyJtZW1iZXI6bWVtYmVyOnVwZGF0ZU1lbWJlclBhc3N3b3JkIiwiZ29vZHM6Z29vZHM6YWRkR29vZHNDYXRlZ29yeSIsImdvb2RzOmdvb2RzOmRlbGV0ZUdvb2RzQ2F0ZWdvcnkiLCJnb29kczpnb29kczphZGRHb29kc0JyYW5kIiwic21zOnN5c25vdGljZXJlY29yZHM6bGlzdCIsInN5czpjb25maWc6c2F2ZSIsInN5czpjb25maWc6dXBkYXRlIiwiZ29vZHM6Z29vZHM6Z2V0U3BlY0FuZEJyYW5rTGlzdCIsImdvb2RzOmdvb2RzOkdvb2RzQ3JlYXRlT3JVcGRhdGUiLCJtZW1iZXI6bWVtYmVyOnVwZGF0ZUN1c3RvbWVyU2VydmljZSIsImdvb2RzOmdvb2RzOnVwZGF0ZUdvb2RzQXR0cmlidXRlIiwic21zOnN5c25vdGljZXRlbXBsYXRlOmxpc3QiLCJzeXM6cm9sZTpsaXN0IiwibWVtYmVyOm1lbWJlcnBhcnRuZXI6YXVkaXRvciIsInN5czptZW51OnNlbGVjdCIsInN1cHBsaWVyOnN1cHBsaWVyOmxpc3QiLCJzeXM6c2NoZWR1bGU6dXBkYXRlIiwic3lzOnNjaGVkdWxlOnNhdmUiLCJtZW1iZXI6bWVtYmVyOm1lbWJlclVuTG9jayIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTpkZWxldGUiLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6aW5mbyIsIm1lbWJlcjptZW1iZXI6dXNlckNvbW1pc3Npb25XaXRoZHJhd0xpc3QiLCJzeXM6cm9sZTpzYXZlIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNDYXRlZ29yeSIsIm1lbWJlcjptZW1iZXI6YWRkTWVtYmVyQWNjb3VudCIsInN5czpzY2hlZHVsZTpsb2ciLCJtZW1iZXI6bWVtYmVyOmFkZE1lbWJlckxldmVsIiwic3lzOnJvbGU6dXBkYXRlIiwibWVtYmVyOm1lbWJlcjp1cGRhdGVNZW1iZXIiLCJzeXM6c2NoZWR1bGU6bGlzdCIsImdvb2RzOmdvb2RzOmdvb2RzbGlzdCIsImdvb2RzOmdvb2RzOmdvb2RzY2F0ZWdvcnlsaXN0IiwibWVtYmVyOm1lbWJlcjptZW1iZXJMb2NrIiwic3lzOnVzZXI6c2F2ZSIsImdvb2RzOmdvb2RzOmRlbGV0ZUdvb2RzR3JvdXAiLCJtZW1iZXI6bWVtYmVycGFydG5lcjpsaXN0Iiwic3VwcGxpZXI6c3VwcGxpZXI6dXBkYXRlIiwic3lzOm9zczphbGwiLCJzeXM6c2NoZWR1bGU6aW5mbyIsImdvb2RzOmdvb2RzOmFkZEdvb2RzIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNTcGVjIiwic3lzOm1lbnU6ZGVsZXRlIiwic3lzOm1lbnU6dXBkYXRlIiwiZ29vZHM6Z29vZHM6Z29vZHNncm91cGxpc3QiLCJzeXM6Y29uZmlnOmluZm8iLCJnb29kczpnb29kczphZGRBdHRyaWJ1dGVTZXJ2aWNlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNCcmFuZCIsImdvb2RzOmdvb2RzOnVwZGF0ZUdvb2RzQnJhbmQiLCJzeXNjb25maWd0aHJlZTpzeXNjb25maWd0aHJlZTpzZXRTbXNTeXNDb25maWdUaHJlZSIsIm1lbWJlcjptZW1iZXI6YWNjb3VudGxpc3QiLCJzeXM6bWVudTpsaXN0IiwiZ29vZHM6Z29vZHM6ZGVsZXRlQXR0ciIsInN5c2NvbmZpZ3RocmVlOnN5c2NvbmZpZ3RocmVlOmdldFN5c0NvbmZpZ1RocmVlIiwic3lzY29uZmlndGhyZWU6c3lzY29uZmlndGhyZWU6bWVtYmVyV2l0aGRyYXdTZXR0aW5nIiwiZ29vZHM6Z29vZHM6YWRkR29vZHNHcm91cCIsInN5czpzY2hlZHVsZTpyZXN1bWUiLCJtZW1iZXI6bWVtYmVyOm1lbWJlcmxpc3QiLCJnb29kczpnb29kczpkZWxldGVFdmFsdWF0ZUFqYXgiLCJnb29kczpnb29kczpnb29kc2JyYW5kbGlzdCIsInN5czp1c2VyOmRlbGV0ZSIsImdvb2RzOmdvb2RzOmF0dHJpYnV0ZWxpc3QiLCJnb29kczpnb29kczpnb29kc3NwZWNsaXN0IiwiZ29vZHM6Z29vZHM6c2V0RXZhbHV0ZVNob3dTdGF0dUFqYXgiLCJzeXM6Y29uZmlnOmxpc3QiLCJzeXM6bWVudTppbmZvIiwic3lzOnVzZXI6dXBkYXRlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNTcGVjIiwiZ29vZHM6Z29vZHM6Z29vZHNjb21tZW50Iiwic3lzOnJvbGU6c2VsZWN0IiwibWVtYmVyOm1lbWJlcjphY2NvdW50ZGV0YWlsIiwic3lzOnVzZXI6bGlzdCIsInN5czptZW51OnNhdmUiLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6dXBkYXRlIiwiZ29vZHM6Z29vZHM6TW9kaWZ5R29vZHNPZmZsaW5lIiwiZ29vZHM6Z29vZHM6YWRkR29vZHNTcGVjIiwic3lzOnJvbGU6aW5mbyIsInN5czpzY2hlZHVsZTpkZWxldGUiLCJzbXM6c3lzbm90aWNldGVtcGxhdGVpdGVtOmdldFRlbXBsYXRlSXRlbSIsIm1lbWJlcjptZW1iZXI6cG9pbnRsaXN0IiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNHcm91cCIsInN5czp1c2VyOmluZm8iLCJzeXM6Y29uZmlnOmRlbGV0ZSIsInN5czpzY2hlZHVsZTpydW4iLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6c2F2ZSIsInN1cHBsaWVyOnN1cHBsaWVyOmRlbGV0ZSIsInN5czpyb2xlOmRlbGV0ZSIsIm1lbWJlcjptZW1iZXI6YmFsYW5jZU1lbWJlckFjY291bnQiLCJtZW1iZXI6bWVtYmVyOnVwZGF0ZU1lbWJlckxldmVsIiwic3VwcGxpZXI6c3VwcGxpZXI6c2F2ZSIsImdvb2RzOmdvb2RzOmRlbGV0ZUdvb2RzIiwibWVtYmVyOm1lbWJlcjptZW1iZXJMZXZlbExpc3QiLCJzeXM6c2NoZWR1bGU6cGF1c2UiLCJnb29kczpnb29kczpyZXBseUV2YWx1YXRlQWpheCIsInN5czpsb2c6bGlzdCJdLCJqdGkiOiIwN2IwYjc4Yy03MjAwLTRiY2ItYTFiNy1mYTAxNjFhN2Y0MjMiLCJjbGllbnRfaWQiOiJjbGllbnQifQ.IM3GmWNYgEyZlU6Mfmm3RG4pHMgyqkeAjiEs8BkU8n4"
        },
        params: {
            pageNumber: pageNum,
            pageSize: pageSize
        }
    })
        .then(function (res) {
            let data = res.data.data
            console.log(res.data.data);

            document.getElementById('totalPages').innerHTML = `共${data.total}条`

            setTaskPlanInfo(data.list);
            createTaskPlanPages(data.pages, data.pageNum, data.pageSize)
        })
}

function setTaskPlanInfo(list) {
    let aTbody = document.getElementById('taskPlanTbody');
    aTbody.innerHTML = '';
    list.forEach(element => {
        // console.log(element)
        switch (element.planStatus) {
            case 1:
                element.planStatus = '未发布'
                break;
            case 2:
                element.planStatus = '已发布'
                break;
            case 3:
                element.planStatus = '已撤回'
                break;
            case 4:
                element.planStatus = '已启用'
                break;
            case 5:
                element.planStatus = '已停用'
                break;
            default: 'null';
        }
        let otr = document.createElement('tr');
        otr.innerHTML = `
            <td>${element.id}</td>
            <td>${element.planName}</td>
            <td>${element.planStartTime}</td>
            <td>${element.planEndTime}</td>
            <td>${element.planStatus}</td>
            <td>${element.planRequire}</td>
            <td>
                <a href="#">发布</a>
                <a href="#">启用</a>
                <a href="#">登录</a>
                <a href="#">编辑</a>
            </td>
        `;
        aTbody.appendChild(otr);
    });

}
getTaskPlanInfo()
function createTaskPlanPages(page, pageNum, pageSize) {
    let aPageNum = document.getElementById('pageNum');
    aPageNum.innerHTML = '';
    let preLi = document.createElement('li');
    preLi.innerHTML = `
        <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </a>`;
    let nextLi = document.createElement('li');
    nextLi.innerHTML = `
        <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </a>`;


    let selectPageSize = document.getElementById('pageSelect');
    selectPageSize.style.cssText = 'float:right;width:100px;margin:0 20px;';
    selectPageSize.classList.add('form-control')
    selectPageSize.innerHTML = `
        <option hidden>n页/条</option>
        <option value="5">5页/条</option>
        <option value="10">10页/条</option>
        <option value="20">20页/条</option>
        <option value="30">30页/条</option>
    `;
    selectPageSize.onchange = function () {
        // console.log(selectPageSize.value)
        getTaskPlanInfo(null, selectPageSize.value)
    }




    aPageNum.appendChild(preLi);
    for (let i = 1; i <= page; i++) {
        let oli = document.createElement('li');
        oli.innerHTML = `<a href="#">${i}</a>`;
        aPageNum.appendChild(oli);
    }
    aPageNum.appendChild(nextLi);

    $('#pageNum li').each(function (i) {
        if (i == pageNum) {
            $(this).addClass('active')
        }
        $(this).click(function () {
            getTaskPlanInfo(i, pageSize);
        })
    })
}