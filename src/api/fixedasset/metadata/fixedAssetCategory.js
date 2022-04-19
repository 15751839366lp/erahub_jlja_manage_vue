import service from "../../../utils/request";

export function findFixedAssetCateguryListApi(data) {
    return service.request({
        url: '/fixedasset/metadata/fixedassetcategory/findFixedAssetCategoryList',
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