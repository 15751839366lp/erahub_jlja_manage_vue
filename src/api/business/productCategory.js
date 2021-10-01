import service from "../../utils/request";

// export function categoryTree() {
//     return service.request({
//         url: '/business/productCategory/categoryTree',
//         method: 'get',
//     });
// }

export function update(url,data) {
    return service.request({
        url: url,
        method: 'put',
        data
    });
}

export function edit(url) {
    return service.request({
        url: url,
        method: 'get'
    });
}

export function deleteProductCategory(url) {
    return service.request({
        url: url,
        method: 'delete'
    });
}

export function categoryTree(params) {
    return service.request({
        url: '/business/productCategory/categoryTree',
        method: 'get',
        params: params
    });
}

export function getParentCategoryTree() {
    return service.request({
        url: '/business/productCategory/getParentCategoryTree',
        method: 'get'
    });
}

export function add(data) {
    return service.request({
        url: '/business/productCategory/add',
        method: 'post',
        data
    });
}