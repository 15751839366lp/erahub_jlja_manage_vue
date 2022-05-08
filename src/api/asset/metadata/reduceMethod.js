import service from "../../../utils/request";

export function getReduceMethodListApi(data) {
    return service.request({
        url: '/asset/metadata/reducemethod/getReduceMethodList',
        method: 'post',
        data
    });
}

export function exportReduceMethodExcelApi() {
    return service.request({
        url: '/asset/metadata/reducemethod/exportReduceMethodExcel',
        method: 'get',
        responseType: "blob"
    });
}

export function changeReduceMethodStatusApi(reduceMethodId,status) {
    return service.request({
        url: '/asset/metadata/reducemethod/changeReduceMethodStatus/' + reduceMethodId + "/" + status,
        method: 'put',
    });
}

export function addReduceMethodApi(data) {
    return service.request({
        url: '/asset/metadata/reducemethod/addReduceMethod',
        method: 'post',
        data
    });
}

export function updateReduceMethodApi(data) {
    return service.request({
        url: '/asset/metadata/reducemethod/updateReduceMethod',
        method: 'put',
        data
    });
}

export function deleteReduceMethodApi(reduceMethodId) {
    return service.request({
        url: '/asset/metadata/reducemethod/deleteReduceMethod/' + reduceMethodId,
        method: 'delete',
    });
}

export function deleteReduceMethodByBatchIdApi(data) {
    return service.request({
        url: '/asset/metadata/reducemethod/deleteReduceMethodByBatchId',
        method: 'delete',
        data
    });
}

export function importReduceMethodApi(data) {
    return service.request({
        url: '/asset/metadata/reducemethod/importReduceMethod',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data;boundary=<calculated when request is sent>'
        },
        contentType: 'application/json',
        processData: true,
        data
    });
}
