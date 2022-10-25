import axios from 'axios';

function request(url, method, query) {
    switch (method) {
        case 'get':
            return axios.get(url, query);
    }
}