$(document).ready(function () {
    $('#registerForm')
        .bootstrapValidator({
            message: '该值无效',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    message: '用户名验证失败',
                    validators: {
                        notEmpty: {
                            message: '用户名不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 15,
                            message: '用户名长度必须在2到15位之间'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z\u4e00-\u9fa5]+$/,
                            message: '用户名只能由字母或汉字构成'
                        }
                    }
                },
                iD: {
                    validators: {
                        notEmpty: {
                            message: '身份证号不能为空'
                        },
                        stringLength: {
                            min: 15,
                            max: 18,
                            message: '身份证号必须在15或18位'
                        },
                        regexp: {
                            regexp: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,
                            message: '身份证号不符合规范',
                        }
                    }
                },
                password: {
                    validators: {
                        stringLength: {
                            min: 6,
                            max: 18,
                            message: '密码必须在6到18位'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9]+$/,
                            message: '密码只能由字母或数字构成'
                        }
                    }
                },
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
                },
                reasonForApplication: {
                    validators: {
                        notEmpty: {
                            message: '申请理由不能为空'
                        },
                        stringLength: {
                            min: 18,
                            max: 300,
                            message: '申请理由必须在18到300字'
                        }
                    }
                },
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

    $('#resetBtn').click(function () {
        $('#registerForm').data('bootstrapValidator').resetForm(true)
    });
    getLength('.nameDiv input', '.nameDiv span', 11);
    getLength('.idDiv input', '.idDiv span', 11);
    getLength('.phoneDiv input', '.phoneDiv span', 11);
    getLength('.reasonDiv textarea', '.reasonDiv span', 500);
});