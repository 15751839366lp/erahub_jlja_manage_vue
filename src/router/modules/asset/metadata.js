const assetCategory = [
    {
        path: '/asset/metadata/assetCategory',
        name: 'assetCategory',
        meta:{
            title: "资产类别"
        },
        component: () => import( '../../../views/asset/metadata/assetCategory.vue'),
    },
    {
        path: '/asset/metadata/depreciationMethod',
        name: 'depreciationMethod',
        meta:{
            title: "折旧方法"
        },
        component: () => import( '../../../views/asset/metadata/depreciationMethod.vue'),
    },
    {
        path: '/asset/metadata/section',
        name: 'section',
        meta:{
            title: "单位管理"
        },
        component: () => import( '../../../views/asset/metadata/section.vue'),
    },
    {
        path: '/asset/metadata/serviceCondition',
        name: 'serviceCondition',
        meta:{
            title: "使用状态"
        },
        component: () => import( '../../../views/asset/metadata/serviceCondition.vue'),
    },
]

export default assetCategory