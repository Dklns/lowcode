import { loginPostInfoAxios } from "./loginPostInfoAxios.js"
export function registerPostInfoVerify(username_input, password_input, email_input, auth_input, username, password, email, authcode, _this) {
    if (username === "" || password === "" || email === "" || authcode === "") {
        if (username === "") {
            document.querySelector(username_input).placeholder = "请输入用户名";
            document.querySelector(username_input).setAttribute(
                "class",
                "register-page-register-user-name-input register-page-register-user-name-input-placeholder"
            );
            document.querySelector(username_input).addEventListener(
                "focus",
                function () {
                    this.classList.remove(
                        "register-page-register-user-name-input-placeholder"
                    );
                }
            );
        }
        if (password === "") {
            document.querySelector(password_input).placeholder = "请输入密码";
            document.querySelector(password_input).setAttribute(
                "class",
                "register-page-register-password-input register-page-register-password-input-placeholder"
            );
            document.querySelector(password_input).addEventListener(
                "focus",
                function () {
                    this.classList.remove(
                        "register-page-register-password-input-placeholder"
                    );
                }
            );
        }

        if (email === "") {
            document.querySelector(email_input).placeholder = "请输入邮箱";
            document.querySelector(email_input).setAttribute(
                "class",
                "register-page-register-email-input register-page-register-email-input-placeholder"
            );
            document.querySelector(email_input).addEventListener(
                "focus",
                function () {
                    this.classList.remove(
                        "register-page-register-email-input-placeholder"
                    );
                }
            );
        }
        if (authcode === "") {
            document.querySelector(auth_input).placeholder = "请输入验证码";
            document.querySelector(auth_input).setAttribute(
                "class",
                "register-page-register-authcode-input register-page-register-authcode-input-placeholder"
            );
            document.querySelector(auth_input).addEventListener(
                "focus",
                function () {
                    this.classList.remove(
                        "register-page-register-authcode-input-placeholder"
                    );
                }
            );
        }
        return false;

    }
    loginPostInfoAxios('http://127.0.0.1:4523/m1/1750685-0-default/user/regesist', _this.registerObj);

}
