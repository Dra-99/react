export default {
    plugins: [
        ["umi-plugin-react", {
            title: true,
            dva: true,
            routes: {
            exclude: [/.*\/models\/.*/, /.*\/model\.js/]
            }
        }]
    ]
} 