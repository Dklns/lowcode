import { addDoubleName } from "./addDoubleName.js";
import { getAxios } from "./getAxios.js";
import { postAxios } from "./postAxios.js";
import { getauthcode } from "./getauthcode.js";
import { showpopup } from "./showpopup.js"
import router from "@/router";
import store from "@/store/index.js";
export async function inputVerify(page_type_array, input_array, _this, obj, axios_type, axios_event) {
    // 该异步请求函数用于拿到网络请求函数返回的promise值
    async function _postAxios(axios_event, JSESSIONID) {
        if (axios_event === "postLoginInfo") {
            var temp = await postAxios('http://127.0.0.1:8001/user/login', obj);
            // var temp = await postAxios('http://127.0.0.1:4523/m1/1750685-0-default/user/login', obj);
            // var temp = await postAxios('https://4a8179z637.uicp.fun/user/login', obj);
            if (temp === "ok") {
                var temp2 = await getAxios(`http://127.0.0.1:8001/isconnect?JSESSIONID=${JSESSIONID}`)//检查是否连接数据库
                // var temp2 = await getAxios("http://127.0.0.1:4523/m1/1750685-0-default/isconnect")//检查是否连接数据库
                // 如果数据库已经连接
                if (temp2 === "ok") {
                    router.push({ path: '/connectview' })//如果数据库已经连接，则直接跳转到。。。。。
                    // router.push({ path: '/XXXXX' })//如果数据库已经连接，则直接跳转到。。。。。
                }
                else {
                    router.push({ path: '/register' })//如果数据库尚未连接，则直接跳转到。。。。。
                    // router.push({ path: '/XXXX' })//如果数据库尚未连接，则直接跳转到。。。。。

                }
            }

        }
        if (axios_event === "postRegisterInfo") {
            console.log("qaaaaaaaaaaaaaaaaa");
            console.log(store.state.JSESSIONID);
            console.log("qaaaaaaaaaaaaaaaaa");
            // var temp3 = await postAxios(`https://4a8179z637.uicp.fun/user/regesist?JSESSIONID=${message}`, obj);
            var temp3 = await postAxios(`http://127.0.0.1:8001/user/regesist?JSESSIONID=${JSESSIONID}`, obj);
            // var temp3 = await postAxios('http://127.0.0.1:4523/m1/1750685-0-default/user/regesist', obj);
            console.log(temp3);
            if (temp3 === "ok") {
                router.push({ path: '/login' })//注册成功后跳转登陆页面
            }
            if (temp3 === "err") {
                console.log("qqqqqqqqqqqqqqqqqq");
                showpopup(_this, "网络或验证码错误")
            }
        }
    }
    async function _getauthcode() {
        // var message = await getauthcode('https://4a8179z637.uicp.fun/mail', obj.email);
        var message = await getauthcode('http://127.0.0.1:8001/mail', obj.email);
        console.log(message);
        return message;
    }
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
        console.log("getauthcodebegin");
        if (axios_event === "getAuthCode") {
            // getAxios('http://127.0.0.1:8001/mail', obj.email);
            // console.log("getauthcode");
            var message = await _getauthcode();
            console.log(message);
            store.commit("changeMessage", message)
        }
    }
    if (axios_type === "post") {
        if (axios_event === "postRegisterInfo") {
            let JSESSIONID = store.state.JSESSIONID;
            _postAxios(axios_event, JSESSIONID)
        }
        if (axios_event === "postLoginInfo") {
            // 这里调用
            let JSESSIONID = store.state.JSESSIONID;
            _postAxios(axios_event, JSESSIONID)
        }
    }

}