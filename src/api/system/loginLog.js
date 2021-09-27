import service from "../../utils/request";

export function loginReport(data) {
    return service.request({
        url: '/system/loginLog/loginReport',
        method: 'post',
        data
    });
}
