import service from "../../../utils/request";

export function findFixedAssetCateguryListApi(data) {
    return service.request({
        url: '/fixedasset/metadata/fixedassetcategory/findFixedAssetCategoryList',
        method: 'post',
        data
    });
}
