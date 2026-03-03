const jwt  = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET

const generateToken = (user) => {
    const { id, email, username , role, createAt, updateAt, profile} = user;
    const accessToken = jwt.sign({
         id, 
         email, 
         username , 
         role, 
         createAt, 
         updateAt, 
         profile
        }, secretKey, { 
            expiresIn: '1h' 
        });
    return accessToken;
};

const verifyToken = (token) => {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
};

module.exports = {
    generateToken,
    verifyToken
};
