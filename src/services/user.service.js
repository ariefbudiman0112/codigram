const {User,Profile} = require('../models');

class UserService {
    static async getAll() {
        try {
            const users = await User.findAll({
                include : [
                    {
                        model : Profile,
                        as : "profile",
                    }
                ],
            });
            return users;
        }   catch (error) {
            throw new Error(error.message);
        }
    }

    static async getAccount(userid) {
        try {
            const user = await User.findOne({
                where: { id: userid },
                include : [
                    {
                        model : Profile,
                        as : "profile",
                    }
                ],
            });
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async edit(userId, data) {
        try {
           const { username, role, fullName, bio, avatarUrl} = data;
           const edituser = await User.update(
                {
                    username,
                    role,
                },
                {
                    where: { id: +userId },
                }
            );
            const editprofile = await Profile.update(
                {
                    fullName,
                    bio,
                    avatarUrl,
                },
                {
                    where: { UserId: +userId },
                }
            );
            //console.log(edituser, editprofile);
            return {edituser, editprofile};
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async delete(id) {
        try {
            const deleted = await User.destroy({ where: { id: +id } });
            return deleted;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = UserService;