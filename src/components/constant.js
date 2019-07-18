export const leftMenu = [
    {
        title: 'Home',
        key: 'home',
        path: '/',
        iconType: 'pie-chart',
        subMenu: []
    },
    {
        title: '点播管理',
        key: 'vodmanage',
        path: '/vodmanage',
        iconType: 'desktop',
        subMenu: []
    },
    {
        title: '用户管理',
        key: 'user',
        path: '/user',
        iconType: 'user',
        subMenu: [
            {
                title: '添加用户',
                key: 'user-add',
                path: '/user/add',
                iconType: 'user-add',
                subMenu: []
            },
            {
                title: '删除用户',
                key: 'user-delete',
                path: '/user/delete',
                iconType: 'user-delete',
                subMenu: []
            }
        ]
    },
    {
        title: '文件管理',
        key: 'file-manage',
        path: '/filemanage',
        iconType: 'file',
        subMenu: [] 
    }
]