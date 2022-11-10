import axios from "axios"
export async function postAxios(url, data) {
    var temp = {};
    await axios({
        method: "post",
        url: url,
        data: data,
    }).then((res) => {
        temp = res;
    });
    let temp_promise = new Promise((resolve, reject) => {

        if (temp.status === 200) {
            return resolve("ok")
        }
        else {
            return reject("err")
        }
    })
    return await temp_promise;
}