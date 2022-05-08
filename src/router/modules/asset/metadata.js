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
    {
        path: '/asset/metadata/assetSource',
        name: 'assetSource',
        meta:{
            title: "资产来源"
        },
        component: () => import( '../../../views/asset/metadata/assetSource.vue'),
    },
    {
        path: '/asset/metadata/reduceMethod',
        name: 'reduceMethod',
        meta:{
            title: "减少方式"
        },
        component: () => import( '../../../views/asset/metadata/reduceMethod.vue'),
    },
    {
        path: '/asset/metadata/reduceReason',
        name: 'reduceReason',
        meta:{
            title: "减少原因"
        },
        component: () => import( '../../../views/asset/metadata/reduceReason.vue'),
    },
    {
        path: '/asset/metadata/technicalCondition',
        name: 'technicalCondition',
        meta:{
            title: "技术状态"
        },
        component: () => import( '../../../views/asset/metadata/technicalCondition.vue'),
    },
]

export default assetCategory