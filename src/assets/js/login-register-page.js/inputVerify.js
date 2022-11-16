import { addDoubleName } from "./addDoubleName.js";
import { _getauthcode } from "./_getauthcode.js";
import store from "@/store/index.js";
import { _postAxios } from "./_postAxios.js";
export async function inputVerify(page_type_array, input_array, _this, obj, axios_type, axios_event) {
    // 判断输入数据是否有为空，有为空则不会发送请求
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
            var message = await _getauthcode(obj);
            store.commit("changeMessage", message)
        }
    }
    if (axios_type === "post") {
        if (axios_event === "postRegisterInfo") {
            _postAxios(_this, axios_event, obj)
        }
        if (axios_event === "postLoginInfo") {
            _postAxios(_this, axios_event, obj)
        }
    }

}