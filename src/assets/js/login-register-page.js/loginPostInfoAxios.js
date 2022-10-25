import axios from "axios"
export function loginPostInfoAxios(url, data) {
    axios({
        method: "post",
        url: url,
        data: data,
    }).then((res) => {
        console.log(res);
    });
}