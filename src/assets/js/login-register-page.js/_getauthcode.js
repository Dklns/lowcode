import { getauthcode } from "./getauthcode";
export async function _getauthcode(obj) {
    var message = await getauthcode('https://4a8179z637.uicp.fun/mail', obj.email);
    return message;
}