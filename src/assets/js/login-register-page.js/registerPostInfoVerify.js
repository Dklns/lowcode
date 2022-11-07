import { loginPostInfoAxios } from "./loginPostInfoAxios.js"
export function registerPostInfoVerify(username, password, email, authcode, _this) {
    if (username === "" || password === "" || email === "" || authcode === "") {
        if (username === "") {
            var register_page_register_user_name_input = document.querySelector(
                ".register-page-register-user-name-input"
            );
            register_page_register_user_name_input.placeholder = "请输入用户名";
            register_page_register_user_name_input.setAttribute(
                "class",
                "register-page-register-user-name-input register-page-register-user-name-input-placeholder"
            );
            register_page_register_user_name_input.addEventListener(
                "focus",
                function () {
                    this.classList.remove(
                        "register-page-register-user-name-input-placeholder"
                    );
                }
            );
        }
        if (username === "") {
            var register_page_register_password_input = document.querySelector(
                ".register-page-register-password-input"
            );
            register_page_register_password_input.placeholder = "请输入密码";
            register_page_register_password_input.setAttribute(
                "class",
                "register-page-register-password-input register-page-register-password-input-placeholder"
            );
            register_page_register_password_input.addEventListener(
                "focus",
                function () {
                    this.classList.remove(
                        "register-page-register-password-input-placeholder"
                    );
                }
            );
        }

        if (email === "") {
            var register_page_register_email_input = document.querySelector(
                ".register-page-register-email-input"
            );
            register_page_register_email_input.placeholder = "请输入邮箱";
            register_page_register_email_input.setAttribute(
                "class",
                "register-page-register-email-input register-page-register-email-input-placeholder"
            );
            register_page_register_email_input.addEventListener(
                "focus",
                function () {
                    this.classList.remove(
                        "register-page-register-email-input-placeholder"
                    );
                }
            );
        }
        if (authcode === "") {
            var register_page_register_authcode_input = document.querySelector(
                ".register-page-register-authcode-input"
            );
            register_page_register_authcode_input.placeholder = "请输入验证码";
            register_page_register_authcode_input.setAttribute(
                "class",
                "register-page-register-authcode-input register-page-register-authcode-input-placeholder"
            );
            register_page_register_authcode_input.addEventListener(
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
