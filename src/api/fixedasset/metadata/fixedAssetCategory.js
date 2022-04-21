import service from "../../../utils/request";

export function getFixedAssetCateguryListApi(data) {
    return service.request({
        url: '/fixedasset/metadata/fixedassetcategory/getFixedAssetCategoryList',
        method: 'post',
        data
    });
}

export function changeFixedAssetCategoryStatusApi(categoryId,status) {
    return service.request({
        url: '/fixedasset/metadata/fixedassetcategory/changeFixedAssetCategoryStatus/' + categoryId + "/" + status,
        method: 'put',
    });
}

export function exportFixedAssetCategoryExcelApi() {
    return service.request({
        url: '/fixedasset/metadata/fixedassetcategory/exportFixedAssetCategoryExcel',
        method: 'post',
        responseType: "blob"
    });
}

export function getAllDepreciationMethodApi() {
    return service.request({
        url: '/fixedasset/metadata/depreciationmethod/getAllDepreciationMethod',
        method: 'get'
    });
}