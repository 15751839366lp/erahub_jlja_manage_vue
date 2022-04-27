import service from "../../../utils/request";

export function getFixedAssetCategoryListApi(data) {
    return service.request({
        url: '/fixedasset/metadata/fixedassetcategory/getFixedAssetCategoryList',
        method: 'post',
        data
    });
}

export function exportFixedAssetCategoryExcelApi() {
    return service.request({
        url: '/fixedasset/metadata/fixedassetcategory/exportFixedAssetCategoryExcel',
        method: 'get',
        responseType: "blob"
    });
}

export function changeFixedAssetCategoryStatusApi(categoryId,status) {
    return service.request({
        url: '/fixedasset/metadata/fixedassetcategory/changeFixedAssetCategoryStatus/' + categoryId + "/" + status,
        method: 'put',
    });
}

export function addFixedAssetCategoryApi(data) {
    return service.request({
        url: '/fixedasset/metadata/fixedassetcategory/addFixedAssetCategory',
        method: 'post',
        data
    });
}

export function updateFixedAssetCategoryApi(data) {
    return service.request({
        url: '/fixedasset/metadata/fixedassetcategory/updateFixedAssetCategory',
        method: 'put',
        data
    });
}

export function deleteFixedAssetCategoryApi(id) {
    return service.request({
        url: '/fixedasset/metadata/fixedassetcategory/deleteFixedAssetCategory/' + id,
        method: 'delete',
    });
}

export function deleteFixedAssetCategoryByBatchIdApi(data) {
    return service.request({
        url: '/fixedasset/metadata/fixedassetcategory/deleteFixedAssetCategoryByBatchId',
        method: 'delete',
        data
    });
}

export function importFixedAssetCategoryApi(data) {
    return service.request({
        url: '/fixedasset/metadata/fixedassetcategory/importFixedAssetCategory',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data;boundary=<calculated when request is sent>'
        },
        contentType: 'application/json',
        processData: true,
        data
    });
}

export function getAllDepreciationMethodApi() {
    return service.request({
        url: '/fixedasset/metadata/depreciationmethod/getAllDepreciationMethod',
        method: 'get'
    });
}