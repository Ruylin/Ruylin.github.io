class Login {
    constructor(byAccount, byPhone, slider, phoneCaptcha, account, password, accountSpirit, accountDiv, passwordDiv, accountSpan) {
        this.byAccount = document.querySelector(byAccount);
        this.byPhone = document.querySelector(byPhone);
        this.slider = document.querySelector(slider);
        this.phoneCaptcha = document.querySelector(phoneCaptcha);
        this.account = document.getElementById(account);
        this.password = document.getElementById(password);
        this.accountSpirit = document.getElementById(accountSpirit);
        this.accountDiv = document.querySelector(accountDiv);
        this.passwordDiv = document.querySelector(passwordDiv);
        this.accountSpan = document.getElementById(accountSpan);
        this.init();
    }
    init() {
        this.judgeForm();
        this.switchLoginWay();
    }
    switchLoginWay() {
        // 账号密码登录
        this.byAccount.onclick = () => {
            this.byPhone.classList.remove('isActive');
            this.phoneCaptcha.classList.add('disNone');
            this.slider.style.left = '0px';
            this.account.setAttribute("placeholder", "请输入账号或手机号码");
            this.account.value = '';
            this.password.value = '';
            this.accountDiv.querySelector('em').innerHTML = '';
            this.passwordDiv.querySelector('em').innerHTML = '';
            this.account.style.borderColor = '#ddd';
            this.password.style.borderColor = '#ddd';
            this.password.setAttribute("placeholder", "请输入密码");
            this.accountSpirit.style.backgroundPosition = '0 0px';
            this.byAccount.classList.add('isActive');
        }
        // 手机号登录
        this.byPhone.onclick = () => {
            this.byAccount.classList.remove('isActive');
            this.phoneCaptcha.classList.remove('disNone');
            this.slider.style.left = '195px';
            this.account.setAttribute("placeholder", "请输入手机号码");
            this.account.value = '';
            this.password.value = '';
            this.accountDiv.querySelector('em').innerHTML = '';
            this.passwordDiv.querySelector('em').innerHTML = '';
            this.account.style.borderColor = '#ddd';
            this.password.style.borderColor = '#ddd';
            this.password.setAttribute("placeholder", "请输入验证码密码");
            this.accountSpirit.style.backgroundPosition = '0 -15px';
            this.byPhone.classList.add('isActive');
        }
    }

    judgeForm() {
        this.account.oninput = () => {
            this.accountSpan.innerHTML = (account.value).trim().length + '/11'
        }
        this.account.onblur = () => {
            var oem = this.accountDiv.querySelector('em');
            if ((account.value).trim() === '') {
                oem.innerHTML = '登录账号不能为空';
                this.account.style.borderColor = '#F56C6C';
                this.accountDiv.appendChild(oem);
            } else if ((account.value).trim().length < 2) {
                this.account.style.borderColor = '#F56C6C';
                oem.innerHTML = '请输入2-11位账号';
            } else {
                oem.innerHTML = '';
                this.account.style.borderColor = 'green';
            }
        }
        this.password.onblur = () => {
            var oem = this.passwordDiv.querySelector('em');
            if ((password.value).trim() === '') {
                oem.innerHTML = '密码不能为空';
                this.password.style.borderColor = '#F56C6C';
                this.passwordDiv.appendChild(oem);
            } else if ((password.value).trim().length < 2) {
                this.password.style.borderColor = '#F56C6C';
                oem.innerHTML = '请输入正确密码';
            } else {
                oem.innerHTML = '';
                this.password.style.borderColor = 'green';
            }
        }
    }
}

new Login('.byAccount', '.byPhone', '.slider', '.phoneCaptcha', 'account', 'password', 'accountSpirit', '.accountDiv', '.passwordDiv', 'accountSpan')