import { loginPostInfoAxios } from "./loginPostInfoAxios.js";
import { addDoubleName } from "./addDoubleName.js"
export function registerPostInfoVerify(username_input, password_input, email_input, auth_input, username, password, email, authcode, _this) {
    if (username === "" || password === "" || email === "" || authcode === "") {
        if (username === "") {
            addDoubleName("register-page-register", username_input, "用户名", "user-name")
        }
        if (password === "") {
            addDoubleName("register-page-register", password_input, "密码", "password")
        }
        if (email === "") {
            addDoubleName("register-page-register", email_input, "邮箱", "email")
        }
        if (authcode === "") {
            addDoubleName("register-page-register", auth_input, "验证码", "authcode")
        }
        return false;

    }
    loginPostInfoAxios('http://127.0.0.1:4523/m1/1750685-0-default/user/regesist', _this.registerObj);

}
