const jwt = require("jsonwebtoken");
const user_service = require("../services/user-service");

module.exports = async function (req, res, next) {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json([]);

  try {
    const { _id } = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!_id) throw Error("Lütfen giriş yapınız.");

    req.user = await profile_service.getProfile(_id);
    if (!req.user) throw new Error("Kullanıcı bulunamadı.");
    // FIXME
    if (req.user.status !== 0) throw new Error("Hesabınız askıya alınmıştır.");
    next();
  } catch (error) {
    return res.status(401).json({
      message:
        (error.message == "jwt expired"
          ? "Oturum zaman aşımına uğradı."
          : error.message) || "Bir hata meydana geldi.",
    });
  }
};
