import axios from "axios"

export async function postAxios(url, data, axios_event) {
    var temp = {};
    var temperr = {};
    var message = ""
    await axios({
        method: "post",
        url: url,
        data: data,
    }).then((res) => {
        temp = res;
        message = res.data.message
        console.log(res);
    }, (err) => {
        temperr = err;
    });
    if (axios_event === "postLoginInfo") {
        var temp_promise = new Promise((resolve) => {
            if (temp !== null && temp.data.code === 200) {
                return resolve(message)
            }
            if ((temp !== null && temp.data.code !== 200) || temperr.code === "ERR_NETWORK") {
                return resolve("err")
            }
        })
    }
    if (axios_event === "postRegisterInfo") {
        temp_promise = new Promise((resolve) => {
            if (temp !== null && temp.data.message === "注册成功") {
                return resolve("ok")
            }
            if ((temp !== null && temp.data.message === "注册失败") || temperr.code === "ERR_NETWORK") {
                return resolve("err")
            }
        })
    }
    return await temp_promise;
}