import axios from "axios"
export async function getAxios(url, param) {
    var temp = {}
    await axios({
        method: "get",
        url: url,
        params: {
            sendto: param
        },
        withCredentials: true,
    }).then((res) => {
        console.log(res);
        temp = res;
    });
    console.log("asdfghj");
    let temp_promise = new Promise((resolve) => {
        if (temp.data.code !== 200) {
            return resolve("err")
        }
        if (temp.data.code === 200) {
            console.log(temp.data.code);
            return resolve("ok")

        }
    })
    return await temp_promise;

}

