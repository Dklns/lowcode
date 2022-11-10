import axios from "axios"
export async function getAxios(url) {
    var temp = {}
    await axios({
        method: "get",
        url: url,
    }).then((res) => {
        console.log(res);
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