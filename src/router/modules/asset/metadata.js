const assetCategory = [
    {
        path: '/asset/metadata/assetCategory',
        name: 'assetCategory',
        meta:{
            title: "资产类别"
        },
        component: () => import( '../../../views/asset/metadata/assetCategory.vue'),     //操作日志
    },
    {
        path: '/asset/metadata/depreciationMethod',
        name: 'depreciationMethod',
        meta:{
            title: "折旧方法"
        },
        component: () => import( '../../../views/asset/metadata/depreciationMethod.vue'),     //操作日志
    },
    {
        path: '/asset/metadata/section',
        name: 'section',
        meta:{
            title: "单位管理"
        },
        component: () => import( '../../../views/asset/metadata/section.vue'),     //操作日志
    },
]

export default assetCategory