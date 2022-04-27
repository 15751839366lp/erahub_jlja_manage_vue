import service from "../../../utils/request";

export function getDepreciationMethodListApi(data) {
    return service.request({
        url: '/fixedasset/metadata/depreciationmethod/getDepreciationMethodList',
        method: 'post',
        data
    });
}

export function exportDepreciationMethodExcelApi() {
    return service.request({
        url: '/fixedasset/metadata/depreciationmethod/exportDepreciationMethodExcel',
        method: 'get',
        responseType: "blob"
    });
}

export function changeDepreciationMethodStatusApi(categoryId,status) {
    return service.request({
        url: '/fixedasset/metadata/depreciationmethod/changeDepreciationMethodStatus/' + categoryId + "/" + status,
        method: 'put',
    });
}

export function addDepreciationMethodApi(data) {
    return service.request({
        url: '/fixedasset/metadata/depreciationmethod/addDepreciationMethod',
        method: 'post',
        data
    });
}

export function updateDepreciationMethodApi(data) {
    return service.request({
        url: '/fixedasset/metadata/depreciationmethod/updateDepreciationMethod',
        method: 'put',
        data
    });
}

export function deleteDepreciationMethodApi(id) {
    return service.request({
        url: '/fixedasset/metadata/depreciationmethod/deleteDepreciationMethod/' + id,
        method: 'delete',
    });
}

export function deleteDepreciationMethodByBatchIdApi(data) {
    return service.request({
        url: '/fixedasset/metadata/depreciationmethod/deleteDepreciationMethodByBatchId',
        method: 'delete',
        data
    });
}

export function importDepreciationMethodApi(data) {
    return service.request({
        url: '/fixedasset/metadata/depreciationmethod/importDepreciationMethod',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data;boundary=<calculated when request is sent>'
        },
        contentType: 'application/json',
        processData: true,
        data
    });
}
