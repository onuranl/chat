const generate_routes = require("./generate_routes");

const verifyToken = require("../middlewares/verify-token");

const channel_controller = require("../controller/channel-controller");
const auth_controller = require("../controller/auth-controller");
const user_controller = require("../controller/user-controller");


const routes = [
    {
        path: '/channel',
        children: [
            {
                path: '/channels',
                handler: channel_controller.getChannels,
                method: 'get',
            },
            {
                path: '/create',
                handler: channel_controller.create,
                method: 'post',
            },
            {
                path: '/channels/:id',
                handler: channel_controller.getChannelsByID,
                method: 'get',
            },
            {
                path: '/message/:id',
                handler: channel_controller.message,
                method: 'post',
            },
            {
                path: '/:id',
                handler: channel_controller.getMessages,
                method: 'get',
            },
        ]
    },
    {
        path: '/auth',
        children: [
            {
                path: '/register',
                handler: auth_controller.register,
                method: 'post'
            },
            {
                path: '/login',
                handler: auth_controller.login,
                method: 'post'
            },
            {
                path: '/logout',
                handler: auth_controller.logout,
                method: 'post'
            },
            {
                path: '/user',
                handler: user_controller.user,
                method: 'get',
                middleware: verifyToken,
            }
        ]
    }
]

module.exports = generate_routes(routes);
