import { registerGetAxios } from "./registerGetAxios.js";
import { addDoubleName } from "./addDoubleName.js"
export function authCodeVerify(username_input, password_input, email_input, username, password, email) {
    if (username === "" || password === "" || email === "") {
        if (username === "") {
            addDoubleName("register-page-register", username_input, "用户名", "user-name")
        }
        if (password === "") {
            addDoubleName("register-page-register", password_input, "密码", "password")
        }
        if (email === "") {
            addDoubleName("register-page-register", email_input, "邮箱", "email")
        }
        return false;

    }
    registerGetAxios('http://127.0.0.1:4523/m1/1750685-0-default/mail');

}
