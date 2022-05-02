import service from "../../../utils/request";

export function getSectionListApi(data) {
    return service.request({
        url: '/fixedasset/metadata/section/getSectionList',
        method: 'post',
        data
    });
}

export function getChildrenListApi(sectionId) {
    return service.request({
        url: '/fixedasset/metadata/section/getChildrenList/' + sectionId,
        method: 'get',
    });
}

export function exportSectionExcelApi() {
    return service.request({
        url: '/fixedasset/metadata/section/exportSectionExcel',
        method: 'get',
        responseType: "blob"
    });
}

export function changeSectionStatusApi(sectionId,status) {
    return service.request({
        url: '/fixedasset/metadata/section/changeSectionStatus/' + sectionId + "/" + status,
        method: 'put',
    });
}

export function addSectionApi(data) {
    return service.request({
        url: '/fixedasset/metadata/section/addSection',
        method: 'post',
        data
    });
}

export function updateSectionApi(data) {
    return service.request({
        url: '/fixedasset/metadata/section/updateSection',
        method: 'put',
        data
    });
}


export function deleteSectionApi(id) {
    return service.request({
        url: '/fixedasset/metadata/section/deleteSection/' + id,
        method: 'delete',
    });
}

export function deleteSectionByBatchIdApi(data) {
    return service.request({
        url: '/fixedasset/metadata/section/deleteSectionByBatchId',
        method: 'delete',
        data
    });
}

export function importSectionApi(data) {
    return service.request({
        url: '/fixedasset/metadata/section/importSection',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data;boundary=<calculated when request is sent>'
        },
        contentType: 'application/json',
        processData: true,
        data
    });
}
