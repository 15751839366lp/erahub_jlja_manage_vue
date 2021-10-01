import service from "../../utils/request";

export function history(params) {
    return service.request({
        url: '/business/health/history',
        method: 'get',
        params: params
    });
}

export function isReport() {
    return service.request({
        url: '/business/health/isReport',
        method: 'get'
    });
}

export function report(data) {
    return service.request({
        url: '/business/health/report',
        method: 'post',
        data
    });
}

