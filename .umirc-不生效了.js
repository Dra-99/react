export default {
    routes: [
        {
            path: "/",
            component: "../layouts/index.js",
            routes: [
                {
                    path: "/",
                    component: "./index.js",
                    title: "首页",
                    Routes: ["./src/routes/showTitle.js"]
                }, 
                {
                    path: "/login",
                    component: "./login.js",  
                    title: "登录页",
                    Routes: ["./src/routes/showTitle.js"]
                },
                {
                    path: "/welcome",
                    component: "./welcome.js",
                    title: "欢迎页",
                    Routes: ["./src/routes/privateRoute.js", "./src/routes/showTitle.js"]
                }
            ]
        }
    ]
} 