import axios from "axios"
export async function getauthcode(url, param) {
    var temp = ""
    await axios({
        method: "get",
        url: url,
        params: {
            sendto: param
        },
        withCredentials: true
    }).then((res) => {
        console.log(res);
        temp = res.data.message;
    });
    return temp;


}

