const business = [
    {
        path: '/business/product/list',
        name: 'ProductList',
        meta:{
            title: "物资资料"
        },
        component: () => import( '../../views/business/product/list.vue'), //物资资料
    },
    {
        path: '/business/product/in-stocks',
        name: 'ProductInStocks',
        meta:{
            title: "入库记录"
        },
        component: () => import( '../../views/business/product/in-stock.vue'), //入库记录
    },
    {
        path: '/business/product/out-stocks',
        name: 'ProductOutStocks',
        meta:{
            title: "发放记录"
        },
        component: () => import( '../../views/business/product/out-stock.vue'), //发放记录
    },
    {
        path: '/business/product/categories',
        name: 'ProductCategories',
        meta:{
            title: "物资类别"
        },
        component: () => import( '../../views/business/product/category.vue'), //物资类别
    },
//     {
//         path: '/business/product/stocks',
//         name: 'ProductStocks',
//         meta:{
//             title: "物资库存"
//         },
//         component: () => import( '../../views/business/product/stock.vue'),  //物资库存
//     },
//     {
//         path: '/business/product/suppliers',
//         name: 'ProductSuppliers',
//         meta:{
//             title: "物资来源"
//         },
//         component: () => import( '../../views/business/product/supplier.vue'), //物资来源
//     },
    {
        path: '/business/product/consumers',
        name: 'ProductConsumers',
        meta:{
            title: "物资去处"
        },
        component: () => import( '../../views/business/product/consumer.vue'), //物资去处
    },
     {
        path: '/business/product/add-stocks',
        name: 'ProductAddStocks',
        meta:{
            title: "物资入库"
        },
        component: () => import( '../../views/business/product/add-stock.vue'), //物资入库
    },
    {
        path: '/business/product/publish',
        name: 'ProductPublish',
        meta:{
            title: "物资发放"
        },
        component: () => import( '../../views/business/product/publish.vue'),   //物资发放
    },
    {
        path: '/covid19/map',
        name: 'Covid19Map',
        meta:{
            title: "全国疫情"
        },
        component: () => import( '../../views/business/covid19/map.vue'), //全国疫情
    },
    {
        path: '/covid19/health',
        name: 'Health',
        meta:{
            title: "健康打卡"
        },
        component: () => import( '../../views/business/covid19/health.vue'), //健康打卡
    }
]

export default business