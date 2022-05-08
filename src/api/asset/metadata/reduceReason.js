import service from "../../../utils/request";

export function getReduceReasonListApi(data) {
    return service.request({
        url: '/asset/metadata/reducereason/getReduceReasonList',
        method: 'post',
        data
    });
}

export function exportReduceReasonExcelApi() {
    return service.request({
        url: '/asset/metadata/reducereason/exportReduceReasonExcel',
        method: 'get',
        responseType: "blob"
    });
}

export function changeReduceReasonStatusApi(reduceReasonId,status) {
    return service.request({
        url: '/asset/metadata/reducereason/changeReduceReasonStatus/' + reduceReasonId + "/" + status,
        method: 'put',
    });
}

export function addReduceReasonApi(data) {
    return service.request({
        url: '/asset/metadata/reducereason/addReduceReason',
        method: 'post',
        data
    });
}

export function updateReduceReasonApi(data) {
    return service.request({
        url: '/asset/metadata/reducereason/updateReduceReason',
        method: 'put',
        data
    });
}

export function deleteReduceReasonApi(reduceReasonId) {
    return service.request({
        url: '/asset/metadata/reducereason/deleteReduceReason/' + reduceReasonId,
        method: 'delete',
    });
}

export function deleteReduceReasonByBatchIdApi(data) {
    return service.request({
        url: '/asset/metadata/reducereason/deleteReduceReasonByBatchId',
        method: 'delete',
        data
    });
}

export function importReduceReasonApi(data) {
    return service.request({
        url: '/asset/metadata/reducereason/importReduceReason',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data;boundary=<calculated when request is sent>'
        },
        contentType: 'application/json',
        processData: true,
        data
    });
}
