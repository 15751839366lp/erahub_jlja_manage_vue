const fixedAssetCategory = [
    {
        path: '/fixedasset/metadata/fixedAssetCategory',
        name: 'fixedAssetCategory',
        meta:{
            title: "资产类别"
        },
        component: () => import( '../../../views/fixedasset/metadata/fixedAssetCategory.vue'),     //操作日志
    },
    {
        path: '/fixedasset/metadata/depreciationMethod',
        name: 'depreciationMethod',
        meta:{
            title: "折旧方法"
        },
        component: () => import( '../../../views/fixedasset/metadata/depreciationMethod.vue'),     //操作日志
    },
    {
        path: '/fixedasset/metadata/section',
        name: 'section',
        meta:{
            title: "单位管理"
        },
        component: () => import( '../../../views/fixedasset/metadata/section.vue'),     //操作日志
    },
]

export default fixedAssetCategory