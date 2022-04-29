import service from "../../../utils/request";

export function getSectionListApi(data) {
    return service.request({
        url: '/fixedasset/metadata/section/getSectionList',
        method: 'post',
        data
    });
}