import { addDoubleName } from "./addDoubleName.js";
import { getAxios } from "./getAxios.js";
import { postAxios } from "./postAxios.js";
export function inputVerify(page_type_array, input_array, obj, axios_type, axios_event) {
    const res = input_array.some(item => item.input_value === "")
    if (res) {
        for (var i = 0; i < input_array.length; i++) {
            var single_array = Object.values(input_array[i]);
            if (single_array[0] === "") {
                addDoubleName(page_type_array[0].page_type, single_array[1], single_array[2], single_array[3])
            }
        }
        return false;
    }
    if (axios_type === "get") {
        if (axios_event === "getAuthCode") {
            console.log("getAuthCode");
            getAxios('http://127.0.0.1:4523/m1/1750685-0-default/mail');

        }
    }
    if (axios_type === "post") {
        if (axios_event === "postRegisterInfo") {
            postAxios('http://127.0.0.1:4523/m1/1750685-0-default/user/regesist', obj);
            console.log("postRegisterInfo");
        }
        if (axios_event === "postLoginInfo") {
            postAxios('http://127.0.0.1:4523/m1/1750685-0-default/user/login', obj);
            console.log("postLoginInfo");
        }
    }

}