import { addDoubleName } from "./addDoubleName.js";
import { registerGetAxios } from "./registerGetAxios.js";
import { loginPostInfoAxios } from "./loginPostInfoAxios.js";
export function inputVerify(page_type_array, authcode_array, registerObj, axios_type) {
    const res = authcode_array.some(item => item.input_value === "")
    if (res) {
        for (var i = 0; i < authcode_array.length; i++) {
            var single_array = Object.values(authcode_array[i]);
            if (single_array[0] === "") {
                addDoubleName(page_type_array[0].page_type, single_array[1], single_array[2], single_array[3])
            }
        }
        return false;
    }
    if (axios_type === "get") {
        registerGetAxios('http://127.0.0.1:4523/m1/1750685-0-default/mail');
        console.log("get");
    }
    if (axios_type === "post") {
        loginPostInfoAxios('http://127.0.0.1:4523/m1/1750685-0-default/user/regesist', registerObj);
        // loginPostInfoAxios('http://127.0.0.1:4523/m1/1750685-0-default/user/login', registerObj);
        console.log("post");
    }

}