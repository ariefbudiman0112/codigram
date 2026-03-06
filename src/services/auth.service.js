const { User, Profile } = require('../models');
const {encryptPwd} = require('../helpers/bcrypt');
const {generateToken} = require('../helpers/jwt');
const {comparePwd} = require('../helpers/bcrypt');

class AuthService {
    static async login({ email, password }) {
        try {
            const user = await User.findOne({ where: { email } });  
            if (user) {
                const isPasswordValid = comparePwd(password, user.password);
                if (isPasswordValid) {
                    const access_token = generateToken(user);
                    return  access_token;
                }else{
                    throw new Error("Invalid email or password");
                }
            }else{
                throw new Error("User not found");
            }
            
        } catch (error) {
            throw new Error("Login failed: " + error.message);
        }
    }

    static async register(data) {
        try {
            const { username, email, password, role } = data;
            //check email uniqueness
            const checkUser = await User.findOne({ where: { email } });
            if (!checkUser) {
                // Encrypt password
                const hashedPassword = encryptPwd(password);
               
                // Create user
                const user = await User.create({ username, email, password: hashedPassword, role });
                
                // Create profile for the user
                const profile = await Profile.create({ UserId: user.id });

                //Generate JWT token
                const access_token = generateToken(user, profile);

                return access_token ;
            }else{
                throw new Error("Email already in use");
            }

        } catch (error) {
            throw new Error("Registration failed: " + error.message);
        }
    }
}

module.exports = AuthService;