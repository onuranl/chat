const user_repository = require("../repositories/user-repository");
const jwt = require('jsonwebtoken')

async function register(user) {
    let result = await user_repository.createUser(user);

    let token = jwt.sign(result.toJSON(), '123213123LASKDAŞLSKDAD%+%+%', {
      expiresIn: 604800,
    })
    console.log(token)

    return result
}

async function login(user) {
    try {
        let foundUser = await user_repository.login(user); 
        if (!foundUser) {
            throw new Error("Kullanıcı bulunamadı")

        } else {
          if (foundUser.comparePassword(user.password)) {
            let token = jwt.sign(
              foundUser.toJSON(),
              '123213123LASKDAŞLSKDAD%+%+%',
              {
                expiresIn: 604800,
              }
            )
    
            return foundUser
          } else {
            throw new Error("Şifre yanlış")
          }
        }
      } catch (err) {
        throw new Error(err)
      }
}


module.exports = {register, login}
