import axios from "axios"
export function registerGetAxios(url) {
    axios({
        method: "get",
        url: url,
    }).then((res) => {
        console.log(res);
    });
}