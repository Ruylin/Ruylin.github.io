function getTownInfo() {
    axios({
        url: "http://192.168.104.217:8280/baseinfo/v1.0/getTreeData",
        method: "get",
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTGV2ZWwiOm51bGwsImFkbWluaXN0cmF0aXZlQ29kZSI6bnVsbCwidXNlcl9pZCI6MSwidXNlcl9uYW1lIjoiYWRtaW4iLCJzY29wZSI6WyJhbGwiXSwibG9naW5OYW1lIjpudWxsLCJVc2VySWRlbnRpdHkiOlsi5Yy657qn5L-h5oGv5ZGYIl0sImV4cCI6MTY1NzU5MDM0MSwiYXV0aG9yaXRpZXMiOlsibWVtYmVyOm1lbWJlcjp1cGRhdGVNZW1iZXJQYXNzd29yZCIsImdvb2RzOmdvb2RzOmFkZEdvb2RzQ2F0ZWdvcnkiLCJnb29kczpnb29kczpkZWxldGVHb29kc0NhdGVnb3J5IiwiZ29vZHM6Z29vZHM6YWRkR29vZHNCcmFuZCIsInNtczpzeXNub3RpY2VyZWNvcmRzOmxpc3QiLCJzeXM6Y29uZmlnOnNhdmUiLCJzeXM6Y29uZmlnOnVwZGF0ZSIsImdvb2RzOmdvb2RzOmdldFNwZWNBbmRCcmFua0xpc3QiLCJnb29kczpnb29kczpHb29kc0NyZWF0ZU9yVXBkYXRlIiwibWVtYmVyOm1lbWJlcjp1cGRhdGVDdXN0b21lclNlcnZpY2UiLCJnb29kczpnb29kczp1cGRhdGVHb29kc0F0dHJpYnV0ZSIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTpsaXN0Iiwic3lzOnJvbGU6bGlzdCIsIm1lbWJlcjptZW1iZXJwYXJ0bmVyOmF1ZGl0b3IiLCJzeXM6bWVudTpzZWxlY3QiLCJzdXBwbGllcjpzdXBwbGllcjpsaXN0Iiwic3lzOnNjaGVkdWxlOnVwZGF0ZSIsInN5czpzY2hlZHVsZTpzYXZlIiwibWVtYmVyOm1lbWJlcjptZW1iZXJVbkxvY2siLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6ZGVsZXRlIiwic21zOnN5c25vdGljZXRlbXBsYXRlOmluZm8iLCJtZW1iZXI6bWVtYmVyOnVzZXJDb21taXNzaW9uV2l0aGRyYXdMaXN0Iiwic3lzOnJvbGU6c2F2ZSIsImdvb2RzOmdvb2RzOnVwZGF0ZUdvb2RzQ2F0ZWdvcnkiLCJtZW1iZXI6bWVtYmVyOmFkZE1lbWJlckFjY291bnQiLCJzeXM6c2NoZWR1bGU6bG9nIiwibWVtYmVyOm1lbWJlcjphZGRNZW1iZXJMZXZlbCIsInN5czpyb2xlOnVwZGF0ZSIsIm1lbWJlcjptZW1iZXI6dXBkYXRlTWVtYmVyIiwic3lzOnNjaGVkdWxlOmxpc3QiLCJnb29kczpnb29kczpnb29kc2xpc3QiLCJnb29kczpnb29kczpnb29kc2NhdGVnb3J5bGlzdCIsIm1lbWJlcjptZW1iZXI6bWVtYmVyTG9jayIsInN5czp1c2VyOnNhdmUiLCJnb29kczpnb29kczpkZWxldGVHb29kc0dyb3VwIiwibWVtYmVyOm1lbWJlcnBhcnRuZXI6bGlzdCIsInN1cHBsaWVyOnN1cHBsaWVyOnVwZGF0ZSIsInN5czpvc3M6YWxsIiwic3lzOnNjaGVkdWxlOmluZm8iLCJnb29kczpnb29kczphZGRHb29kcyIsImdvb2RzOmdvb2RzOnVwZGF0ZUdvb2RzU3BlYyIsInN5czptZW51OmRlbGV0ZSIsInN5czptZW51OnVwZGF0ZSIsImdvb2RzOmdvb2RzOmdvb2RzZ3JvdXBsaXN0Iiwic3lzOmNvbmZpZzppbmZvIiwiZ29vZHM6Z29vZHM6YWRkQXR0cmlidXRlU2VydmljZSIsImdvb2RzOmdvb2RzOmRlbGV0ZUdvb2RzQnJhbmQiLCJnb29kczpnb29kczp1cGRhdGVHb29kc0JyYW5kIiwic3lzY29uZmlndGhyZWU6c3lzY29uZmlndGhyZWU6c2V0U21zU3lzQ29uZmlnVGhyZWUiLCJtZW1iZXI6bWVtYmVyOmFjY291bnRsaXN0Iiwic3lzOm1lbnU6bGlzdCIsImdvb2RzOmdvb2RzOmRlbGV0ZUF0dHIiLCJzeXNjb25maWd0aHJlZTpzeXNjb25maWd0aHJlZTpnZXRTeXNDb25maWdUaHJlZSIsInN5c2NvbmZpZ3RocmVlOnN5c2NvbmZpZ3RocmVlOm1lbWJlcldpdGhkcmF3U2V0dGluZyIsImdvb2RzOmdvb2RzOmFkZEdvb2RzR3JvdXAiLCJzeXM6c2NoZWR1bGU6cmVzdW1lIiwibWVtYmVyOm1lbWJlcjptZW1iZXJsaXN0IiwiZ29vZHM6Z29vZHM6ZGVsZXRlRXZhbHVhdGVBamF4IiwiZ29vZHM6Z29vZHM6Z29vZHNicmFuZGxpc3QiLCJzeXM6dXNlcjpkZWxldGUiLCJnb29kczpnb29kczphdHRyaWJ1dGVsaXN0IiwiZ29vZHM6Z29vZHM6Z29vZHNzcGVjbGlzdCIsImdvb2RzOmdvb2RzOnNldEV2YWx1dGVTaG93U3RhdHVBamF4Iiwic3lzOmNvbmZpZzpsaXN0Iiwic3lzOm1lbnU6aW5mbyIsInN5czp1c2VyOnVwZGF0ZSIsImdvb2RzOmdvb2RzOmRlbGV0ZUdvb2RzU3BlYyIsImdvb2RzOmdvb2RzOmdvb2RzY29tbWVudCIsInN5czpyb2xlOnNlbGVjdCIsIm1lbWJlcjptZW1iZXI6YWNjb3VudGRldGFpbCIsInN5czp1c2VyOmxpc3QiLCJzeXM6bWVudTpzYXZlIiwic21zOnN5c25vdGljZXRlbXBsYXRlOnVwZGF0ZSIsImdvb2RzOmdvb2RzOk1vZGlmeUdvb2RzT2ZmbGluZSIsImdvb2RzOmdvb2RzOmFkZEdvb2RzU3BlYyIsInN5czpyb2xlOmluZm8iLCJzeXM6c2NoZWR1bGU6ZGVsZXRlIiwic21zOnN5c25vdGljZXRlbXBsYXRlaXRlbTpnZXRUZW1wbGF0ZUl0ZW0iLCJtZW1iZXI6bWVtYmVyOnBvaW50bGlzdCIsImdvb2RzOmdvb2RzOnVwZGF0ZUdvb2RzR3JvdXAiLCJzeXM6dXNlcjppbmZvIiwic3lzOmNvbmZpZzpkZWxldGUiLCJzeXM6c2NoZWR1bGU6cnVuIiwic21zOnN5c25vdGljZXRlbXBsYXRlOnNhdmUiLCJzdXBwbGllcjpzdXBwbGllcjpkZWxldGUiLCJzeXM6cm9sZTpkZWxldGUiLCJtZW1iZXI6bWVtYmVyOmJhbGFuY2VNZW1iZXJBY2NvdW50IiwibWVtYmVyOm1lbWJlcjp1cGRhdGVNZW1iZXJMZXZlbCIsInN1cHBsaWVyOnN1cHBsaWVyOnNhdmUiLCJnb29kczpnb29kczpkZWxldGVHb29kcyIsIm1lbWJlcjptZW1iZXI6bWVtYmVyTGV2ZWxMaXN0Iiwic3lzOnNjaGVkdWxlOnBhdXNlIiwiZ29vZHM6Z29vZHM6cmVwbHlFdmFsdWF0ZUFqYXgiLCJzeXM6bG9nOmxpc3QiXSwianRpIjoiYzE2MWY0MjEtZjg0ZS00ZjZkLThmNTgtOGZkMGFiM2U5ZDQwIiwiY2xpZW50X2lkIjoiY2xpZW50In0.oT7fooUuxLStkSmsMsp9BSmgLzVilrWoCKDT9rgwPiM"
        }
    })
        .then(function (res) {
            // console.log(res.data.data);

            setTownInfo(res.data.data.list);
        })
}
function setTownInfo(AllList) {
    var pe = document.getElementById('level-4');
    var so = document.getElementById('level-5');
    AllList.forEach(element => {
        if (element.administrativeLevel === 4) {
            let opPe = document.createElement('option');
            opPe.innerHTML = element.administrativeName;
            opPe.value = element.administrativeName;
            pe.appendChild(opPe)
        }
    });

    pe.onchange = function () {
        if (pe.value != '请选择') {
            so.removeAttribute('disabled');
        }
        so.innerHTML = `<option hidden>请选择</option>`
        AllList.forEach(element => {
            if (element.administrativeLevel === 5 && element.parentName === pe.value) {
                let opSo = document.createElement('option');
                opSo.innerHTML = element.administrativeName;
                opSo.value = element.administrativeName;
                so.appendChild(opSo)
            }
        })
    }
}
getTownInfo()