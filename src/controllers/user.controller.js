const { UserService } = require('../services');

class UserController {
    static async getAll(req, res) {
        try {
            const users = await UserService.getAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }   
    }

    static async getAccount(req, res) {
        try {
            const user = await UserService.getAccount(+req.userData.id);
            //console.log(req.userData);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async edit(req, res) {
        try {
            const userId = +req.userData.id;
            const user = await UserService.edit(userId, req.body);
            if (user.edituser[0] === 1 && user.editprofile[0] === 1) {
                return res.status(200).json({ message: 'User updated successfully' });
            }else {
                 return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.userId;
            const deleted = await UserService.delete(id);
            if (deleted === 1) {
                return res.status(200).json({ message: 'User deleted successfully' });
            } else {
                return res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserController;