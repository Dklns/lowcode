import axios from 'axios'
export default function ({ data }) {
    const server = axios.create({
        timeout: 5000,
        withCredentials: true
    })
    return server(data)
}