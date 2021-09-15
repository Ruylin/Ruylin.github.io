$(document).ready(function () {
    $('#accountForm')
        .bootstrapValidator({
            excluded: [':disabled'],
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                account: {
                    validators: {
                        notEmpty: {
                            message: '用户名不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 11,
                            message: '用户名长度必须在2到11位之间'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9]+$/,
                            message: '账号只能由字母或数字构成'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: '密码不能为空'
                        }
                    }
                },
                phone: {
                    validators: {
                        // notEmpty: {
                        //     message: '手机号不能为空'
                        // },
                        regexp: {
                            regexp: /^1(3|4|5|7|8)\d{9}$/,
                            message: '手机号不符合规范',
                        }
                    }
                },
                authCode: {
                    validators: {
                        // notEmpty: {
                        //     message: '验证码不能为空'
                        // }
                    }
                }
            }
        })
    // .on('status.field.bv', function (e, data) {
    //     e.preventDefault();
    //     validator = data.bv,
    //         $tabPane = data.element.parents('.tab-pane'),
    //         tabId = $tabPane.attr('id');

    //     if (tabId) {
    //         var $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i');

    //         // Add custom class to tab containing the field
    //         if (data.status == validator.STATUS_INVALID) {
    //             $icon.removeClass('fa-check').addClass('fa-times');
    //         } else if (data.status == validator.STATUS_VALID) {
    //             var isValidTab = validator.isValidContainer($tabPane);
    //             $icon.removeClass('fa-check fa-times')
    //                 .addClass(isValidTab ? 'fa-check' : 'fa-times');
    //         }
    //     }
    // });
    $('#accountLogin').click(function () {
        this.classList.add('nav-acitve');
        $('#phoneLogin').attr('class', '');
        $('.slider').css({ 'left': '0' });
    });
    $('#phoneLogin').click(function () {
        this.classList.add('nav-acitve');
        $('#accountLogin').attr('class', '');
        $('.slider').css({ 'left': '55%' });
    });
    getLength('.accountDiv input', '.accountDiv span', 11);
    getLength('.phoneDiv input', '.phoneDiv span', 11);

    document.querySelector('#password').addEventListener('input', function () {
        let btn = document.querySelector('#loginBtn');
        btn.removeAttribute('disabled');
    })

    $('#loginBtn').click(function (e) {
        e.preventDefault();
        let usernameValue = document.querySelector('#account').value;
        let passwordValue = document.querySelector('#password').value;
        // console.log(usernameValue, passwordValue)
        login(usernameValue, passwordValue)
    });
    function login(uValue, pValue) {
        let data = new URLSearchParams();
        data.append('username', uValue);
        data.append('password', pValue);
        data.append('grant_type', 'password');
        data.append('scope', 'all');
        axios({
            url: "http://192.168.104.217:8280/uaa/oauth/token",
            method: "post",
            data: data,
            headers: {
                Authorization: "Basic Y2xpZW50OnNlY3JldA=="
            }
        })
            .then(function (res) {
                console.log(res)
                localStorage.setItem('userInfo', JSON.stringify(res));
                location.href = '../index/index.html';
            })
    };
});