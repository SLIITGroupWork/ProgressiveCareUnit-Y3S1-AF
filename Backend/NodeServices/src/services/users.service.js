const BaseService = require('../base/services/base.service');
const unitOfWork = require('../data-access/unit-of-work');

class UserService extends BaseService {

    _checkUserNICValid(nic) {

        return new Promise((resolve, reject) => {

            unitOfWork.userSchema.findOne({ nic: nic }, { _id: true }).exec().then(data => {
                resolve(!(data));
            }).catch(err => {
                reject(err);
            });
        });
    }

    getAllUsers() {

        return new Promise((resolve, reject) => {
            unitOfWork.userSchema.find().exec().then(users => {
                resolve(users);
            }).catch(err => {
                reject(err);
            });
        });
    }

    getUserById(id) {

        return new Promise((resolve, reject) => {

            unitOfWork.userSchema.findOne({ _id: id }).exec().then(user => {
                resolve(user);
            }).catch(err => {
                reject(err);
            });
        });
    }

    getUserByNIC(nic) {

        return new Promise((resolve, reject) => {

            unitOfWork.userSchema.findOne({ nic: nic }).exec().then(user => {
                resolve(user);
            }).catch(err => {
                reject(err);
            });
        });
    }

    addNewUser(user) {

        return new Promise((resolve, reject) => {
            this._checkUserNICValid(user.nic).then(isValid => {

                if (isValid) {

                    let userSchema = new unitOfWork.userSchema({
                        nic: user.nic,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        gender: user.gender,
                        contact: user.contact
                    });

                    userSchema.save().then(user => {
                        resolve(user);
                    }).catch(err => {
                        reject(err);
                    });
                }
                else {
                    resolve(null);
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    updateUser(user) {

        return new Promise((resolve, reject) => {

            unitOfWork.userSchema.findOneAndUpdate({ nic: user.nic },
                {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    gender: user.gender,
                    contact: user.contact
                }
            ).then(data => {
                if (data) {
                    resolve(user);
                }
                else {
                    resolve(null);
                }
            }).catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = new UserService();