import { allPort } from "../api";
import { METHOD, request } from '../../utils/request';

async function connectDatabase(query, JSESSIONID) {
    console.log('test');
    return request(allPort.CONNECT_DATABASE, METHOD.POST, query, JSESSIONID);
}

async function getAllDatabase(JSESSIONID) {
    return request(allPort.GET_ALL_DATABASE, METHOD.GET, {}, JSESSIONID);
}

async function getAllTable(query, JSESSIONID) {
    return request(allPort.GET_ALL_TABLE, METHOD.GET, query, JSESSIONID);
}

async function generateCode(query, JSESSIONID) {
    return request(allPort.GENERATE_CODE, METHOD.GET, query, JSESSIONID);
}

export {
    connectDatabase,
    getAllDatabase,
    getAllTable,
    generateCode,
}