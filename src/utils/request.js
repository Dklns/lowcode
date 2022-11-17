import axios from "axios"
const METHOD = {
    GET: 'get',
    POST: 'post',
    DELETE: 'delete',
    PUT: 'put'
}
async function request(url, method, param) {
    switch (method) {
        case METHOD.GET:
            return axios.get(url, param);
        case METHOD.POST:
            return axios.post(url, param);
    }
}
export {
    METHOD,
    request
}