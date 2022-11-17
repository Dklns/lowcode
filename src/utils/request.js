import axios from 'axios'
export default function ({ datas }) {
    const baseUrl = '/api'
    const server = axios.create({
        baseURL: baseUrl,
        timeout: 5000
    })
    return server(datas)
}

// http method
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