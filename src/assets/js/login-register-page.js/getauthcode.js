import axios from "axios"
export async function getauthcode(url, param) {
    var temp = ""
    await axios({
        method: "get",
        url: url,
        params: {
            sendto: param
        }
    }).then((res) => {
        console.log("getauthcodeend")
        console.log(res);
        temp = res.data.message;
    });
    return temp;


}

