const user_service = require("../services/user-service");

// async function user(req, res) {
//     const token = req.decoded._id;
//     console.log(token)
//     try {
//         const result = await user_service.getUserByToken(token);
//         if (user) {
//             return res.json({
//               status: true,
//               user: result,
//             })
//           }
//     } catch (error) {
//         return res.status(404).json({
//         error: error.message,
//         });
//     }
// }
async function user(req, res) {
  return res.json({ user: req.user });
}

module.exports = {user} 
