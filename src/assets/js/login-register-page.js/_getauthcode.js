import { getauthcode } from "./getauthcode";
export async function _getauthcode(obj) {
    var message = await getauthcode('http://127.0.0.1:8001/mail', obj.email);
    return message;
}