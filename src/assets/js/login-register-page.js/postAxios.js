// import router from "@/router";
// import axios from "axios"
// import { resolve } from "core-js/actual/promise";
export async function postAxios() {
    let temp_promise = new Promise((resolve, reject) => {
        var temp = { status: 200 };
        // axios({
        //     method: "post",
        //     url: url,
        //     data: data,
        // }).then((res) => {
        //     console.log(res);
        //     temp = res;
        // });
        if (temp.status === 200) {
            console.log("aaaaaaaaaaaaaaaa");
            return resolve("ok")
        }
        else {
            return reject("err")
        }
    })
    return await temp_promise;
    // var temp = {}
    // await axios({
    //     method: "post",
    //     url: url,
    //     data: data,
    // }).then((res) => {
    //     console.log(res);
    //     temp = res;
    // });

    // if (temp.status === 200) {
    //     return "ok"
    // return resolve("ok")


    // }

}