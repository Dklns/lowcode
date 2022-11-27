import store from "@/store/index.js";
import { postAxios } from "./postAxios";
import { getAxios } from "./getAxios";
import router from "@/router";
import { showpopup } from "./showpopup.js"
export async function _postAxios(_this, axios_event, obj) {
    let JSESSIONID = store.state.JSESSIONID;
    if (axios_event === "postLoginInfo") {
        var temp = await postAxios('https://4a8179z637.uicp.fun/user/login', obj, axios_event);
        if (temp === "err") {
            showpopup(_this, "登录失败")
        }
        else {
            console.log("qqqqqqqqqqq");
            store.commit("changeMessage", temp)
            JSESSIONID = store.state.JSESSIONID;
            var temp2 = await getAxios(`https://4a8179z637.uicp.fun/isconnect?JSESSIONID=${JSESSIONID}`)//检查是否连接数据库
            // 如果数据库已经连接
            console.log("1111111");
            console.log(temp2);
            if (temp2 === "ok") {
                router.push({ path: '/connect' })//如果数据库尚未连接，则直接跳转到。。。。。
            }
            if (temp2 === "err") {
                router.push({ path: '/register' })//如果数据库已经连接，则直接跳转到。。。。。
            }
        }
    }
    if (axios_event === "postRegisterInfo") {
        var temp3 = await postAxios(`https://4a8179z637.uicp.fun/user/regesist?JSESSIONID=${JSESSIONID}`, obj, axios_event);
        if (temp3 === "ok") {
            router.push({ path: '/login' })//注册成功后跳转登陆页面
        }
        if (temp3 === "err") {
            showpopup(_this, "网络或验证码错误")
        }
    }
}