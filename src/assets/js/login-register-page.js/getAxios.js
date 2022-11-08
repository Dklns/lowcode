import axios from "axios"
export function getAxios(url) {
    axios({
        method: "get",
        url: url,
    }).then((res) => {
        console.log(res);
    });
}