import { addDoubleName } from "./addDoubleName.js";
import { getAxios } from "./getAxios.js";
import { postAxios } from "./postAxios.js";
import router from "@/router";
export function inputVerify(page_type_array, input_array, obj, axios_type, axios_event) {
    const res = input_array.some(item => item.input_value === "")
    // 该异步请求函数用于拿到网络请求函数返回的promise值
    async function _postAxios(axios_event) {

        if (axios_event === "postLoginInfo") {
            var temp = await postAxios('http://127.0.0.1:4523/m1/1750685-0-default/user/login', obj);
            if (temp === "ok") {
                var temp2 = await getAxios("http://127.0.0.1:4523/m1/1750685-0-default/isconnect")//检查是否连接数据库
                console.log(temp2);
                // 如果数据库已经连接
                if (temp2 === "ok") {
                    router.push({ path: '/register' })//如果数据库已经连接，则直接跳转到。。。。。
                    // router.push({ path: '/XXXXX' })//如果数据库已经连接，则直接跳转到。。。。。
                }
                else {
                    router.push({ path: '/register' })//如果数据库尚未连接，则直接跳转到。。。。。
                    // router.push({ path: '/XXXX' })//如果数据库尚未连接，则直接跳转到。。。。。

                }
            }

        }
        if (axios_event === "postRegisterInfo") {
            var temp3 = await postAxios('http://127.0.0.1:4523/m1/1750685-0-default/user/regesist', obj);
            if (temp3 === "ok") {
                router.push({ path: '/login' })//注册成功后跳转登陆页面
            }

        }

    }
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
            _postAxios(axios_event)
        }

        if (axios_event === "postLoginInfo") {
            // 这里调用
            _postAxios(axios_event)
        }
    }

}