import axios from 'axios'
export default function ({ datas }) {
    const baseUrl = '/api'
    const server = axios.create({
        baseURL: baseUrl,
        timeout: 5000
    })
    return server(datas)
}