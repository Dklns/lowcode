import { allPort } from "../api";
import { METHOD, request } from '../../utils/request';

async function connectDatabase(query) {
    return request(allPort.CONNECT_DATABASE, METHOD.POST, query);
}

async function getAllDatabase(query) {
    return request(allPort.GET_ALL_DATABASE, METHOD.GET, query);
}

async function getAllTable(query) {
    return request(allPort.GET_ALL_TABLE, METHOD.GET, query);
}

export {
    connectDatabase,
    getAllDatabase,
    getAllTable
}