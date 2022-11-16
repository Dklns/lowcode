import axios from "axios"

export async function postAxios(url, data) {
    var temp = {};
    var temperr = {}
    await axios({
        method: "post",
        url: url,
        data: data,
    }).then((res) => {
        temp = res;
        console.log(res);
        console.log("postaxios");
    }, (err) => {
        temperr = err;
        console.log(err)

    });
    let temp_promise = new Promise((resolve) => {
        if (temp !== null && temp.status === 200) {
            return resolve("ok")
        }
        if ((temp !== null && temp.status !== 200) || temperr.code === "ERR_NETWORK") {
            console.log("ERR_NETWORK~~~~~~~~~~~~~~~~~~~~~");
            return resolve("err")
        }
    })
    return await temp_promise;
}