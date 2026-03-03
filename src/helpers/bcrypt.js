const bcrypt = require('bcrypt');
const saltRounds = +process.env.SALT_ROUNDS || 10; // Ganti dengan jumlah salt rounds yang diinginkan, default 10

const encryptPwd = (pwd) => {
    let result = bcrypt.hashSync(pwd, saltRounds);
    return result;
}

const comparePwd = (pwd, hashedPwd) => {
    let result = bcrypt.compareSync(pwd, hashedPwd);
    return result;
}

module.exports = {
    encryptPwd,
    comparePwd
}