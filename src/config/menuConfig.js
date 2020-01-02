const MenuList = [
    {
        title: "Home",
        key: '/home',
        icon: 'home',
    },
    {
        title: "Products",
        key: '/products',
        icon: 'appstore',
        children: [
            {
                title: "Category",
                key: "/category",
                icon: "bars",
            },
            {
                title: "Management",
                key: "/product",
                icon: "tool",
            },
        ]
    },
    {
        title: "User",
        key: "/user",
        icon: "user",
    },
    {
        title: "Role",
        key: "/role",
        icon: "safety",
    },
    {
        title: "Charts",
        key: "/charts",
        icon: "area-chart",
        children: [
            {
                title: "Bar Chart",
                key: "/charts/bar",
                icon: "bar-chart",
            },
            {
                title: "Line Chart",
                key: "/charts/line",
                icon: "line-chart",
            },
            {
                title: "Pie Chart",
                key: "/charts/pie",
                icon: "pie-chart",
            },
        ]
    }
]
export default MenuList;