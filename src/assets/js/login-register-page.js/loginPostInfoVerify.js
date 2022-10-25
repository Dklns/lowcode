import { loginPostInfoAxios } from "./loginPostInfoAxios.js"
export function loginPostInfoVerify(username, password, _this) {
    if (username === "" || password === "") {
        if (username === "") {
            var login_page_login_user_name_input = document.querySelector(
                ".login-page-login-user-name-input"
            );
            login_page_login_user_name_input.placeholder = "请输入用户名";
            login_page_login_user_name_input.setAttribute(
                "class",
                "login-page-login-user-name-input login-page-login-user-name-input-placeholder"
            );
            login_page_login_user_name_input.addEventListener(
                "focus",
                function () {
                    this.classList.remove(
                        "login-page-login-user-name-input-placeholder"
                    );
                }
            );
        }
        if (password === "") {
            var login_page_login_user_name_password = document.querySelector(
                ".login-page-login-user-name-password"
            );
            login_page_login_user_name_password.placeholder = "请输入密码";
            login_page_login_user_name_password.setAttribute(
                "class",
                "login-page-login-user-name-password login-page-login-user-name-password-placeholder"
            );
            login_page_login_user_name_password.addEventListener(
                "focus",
                function () {
                    this.classList.remove(
                        "login-page-login-user-name-password-placeholder"
                    );
                }
            );
        }
        return false;

    }
    loginPostInfoAxios('http://127.0.0.1:4523/m1/1750685-0-default/user/login', _this.loginObj);

}
