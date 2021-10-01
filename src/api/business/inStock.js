import service from "../../utils/request";

export function addIntoStock(data) {
    return service.request({
        url: '/business/inStock/addIntoStock',
        method: 'post',
        data
    });
}

export function publish(url) {
    return service.request({
        url: url,
        method: 'put'
    });
}

export function back(url) {
    return service.request({
        url: url,
        method: 'put'
    });
}

export function remove(url) {
    return service.request({
        url: url,
        method: 'put'
    });
}

export function deleteInStock(url) {
    return service.request({
        url: url,
        method: 'get'
    });
}

export function detail(url) {
    return service.request({
        url: url,
        method: 'get'
    });
}

export function findInStockList(params) {
    return service.request({
        url: "/business/inStock/findInStockList",
        method: 'get',
        params: params
    });
}
