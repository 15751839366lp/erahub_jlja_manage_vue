const system = [
    {
        path: '/system/welcome',
        name: 'Welcome',
        meta:{
            title: "首页"
        },
        component: () => import( '../../views/welcome.vue'), //系统欢迎页
    }, {
        path: '/system/users',
        name: 'Users',
        meta:{
            title: "用户管理"
        },
        component: () => import( '../../views/system/user.vue'), //用户管理
    }, {
        path: '/system/roles',
        name: 'Roles',
        meta:{
            title: "角色管理"
        },
        component: () => import( '../../views/system/role.vue'), //角色管理
    }
    , {
        path: '/system/menus',
        name: 'Menus',
        meta:{
            title: "菜单管理"
        },
        component: () => import( '../../views/system/menu.vue'), //菜单管理
    }
    , {
        path: '/system/departments',
        name: 'Departments',
        meta:{
            title: "部门管理"
        },
        component: () => import( '../../views/system/dept.vue'), // 部门管理
    },
    {
        path: '/system/files',
        name: 'Files',
        meta:{
            title: "文件管理"
        },
        component: () => import('../../views/system/file'),   //文件管理
    },
    {
        path: '/system/icon',
        name: 'Icons',
        meta:{
            title: "系统图标"
        },
        component: () => import('../../views/system/icon'),  //系统图标
    },
    {
        path: "/error/401",
        component: () => import( '../../views/error/401'),
    }
]

export default system