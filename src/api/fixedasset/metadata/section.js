import service from "../../../utils/request";

export function getFixedAssetCategoryListApi() {
    return service.request({
        url: '/fixedasset/metadata/section/getSectionList',
        method: 'get'
    });
}