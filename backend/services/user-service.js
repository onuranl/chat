const user_repository = require("../repositories/user-repository");

async function getUserByToken(id) {
    const result = await user_repository.getUser(id)

    console.log(id, result)
    if (!result) throw new Error("Kullanıcı bulunamadı.");
    return result;
}

async function getUserByID(id) {
    const user = await user_repository.getUserById(id);
    return user;
  }

module.exports = {getUserByToken, getUserByID}

