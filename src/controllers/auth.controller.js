const {AuthService} = require('../services/');

class AuthController {
    static async login(req, res) {
        try {
            const access_token = await AuthService.login(req.body);
            res.status(200).json({ message: "Login successful", access_token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async register(req, res) {
        try {
            const access_token = await AuthService.register(req.body);
            res.status(201).json({ message: "User registered successfully", access_token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = AuthController;
