import axios from "axios"
const METHOD = {
    GET: 'get',
    POST: 'post',
    DELETE: 'delete',
    PUT: 'put'
}
async function request(url, method, params, JSESSIONID) {
    url += JSESSIONID ? `?JSESSIONID=${JSESSIONID}` : '';
    switch (method) {
        case METHOD.GET:
            return axios.get(url, { params });
        case METHOD.POST:
            return axios.post(url, params);
    }
}
export {
    METHOD,
    request
}