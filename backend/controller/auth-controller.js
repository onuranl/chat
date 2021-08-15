const auth_service = require("../services/auth-service");

async function register(req, res) {
    const { name, email, password} = req.body;
  
    const payload = {
        name,
        email,
        password,
        profile_picture: ""
    };
  
    try {
      const user = await auth_service.register(payload);
      return res.status(200).json({
        status: true,
        user,
        message: "İşlem başarıyla gerçekleşti.",
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message || "Bir hata meydana geldi.",
      });
    }
}

async function login(req, res) {
  const {email, password } = req.body;

  const payload = {
      email,
      password,
  };

  try {
    const user = await auth_service.login(payload);
    return res.status(200).json({
      status: true,
      user,
      message: "İşlem başarıyla gerçekleşti.",
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi.",
    });
  }
}

async function logout(req, res) {
  return res.json();
}

module.exports = {register, login, logout} 