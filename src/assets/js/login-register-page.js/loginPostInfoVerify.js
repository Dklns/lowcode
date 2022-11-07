import { loginPostInfoAxios } from "./loginPostInfoAxios.js";
import { addDoubleName } from "./addDoubleName.js";
export function loginPostInfoVerify(username_input, password_input, username, password, _this) {
    if (username === "" || password === "") {
        if (username === "") {
            addDoubleName("login-page-login", username_input, "用户名", "user-name")
        }
        if (password === "") {
            // document.querySelector(password_input).placeholder = "请输入密码";
            // document.querySelector(password_input).setAttribute(
            //     "class",
            //     "login-page-login-user-name-password login-page-login-user-name-password-placeholder"
            // );
            // document.querySelector(password_input).addEventListener(
            //     "focus",
            //     function () {
            //         this.classList.remove(
            //             "login-page-login-user-name-password-placeholder"
            //         );
            //     }
            // );
            addDoubleName("login-page-login", password_input, "密码", "password")

        }
        return false;

    }
    loginPostInfoAxios('http://127.0.0.1:4523/m1/1750685-0-default/user/login', _this.loginObj);

}
