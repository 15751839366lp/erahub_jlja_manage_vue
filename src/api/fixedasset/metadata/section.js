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