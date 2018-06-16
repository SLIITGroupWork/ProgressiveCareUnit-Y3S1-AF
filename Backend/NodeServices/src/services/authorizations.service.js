const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const BaseService = require('../base/services/base.service');
const appConfigs = require('../../appConfig');

class AuthorizationsService extends BaseService {

    _getApplicationUserByUsername(username) {

        return new Promise((resolve, reject) => {
            this.unitOfWork.applicationUserSchema.findOne({ username: username }).exec().then(applicationUser => {
                resolve(applicationUser);
            }).catch(err => {
                reject(err);
            });
        });
    }

    _getApplicationUserWithoutPasswordByUsername(username) {

        return new Promise((resolve, reject) => {
            this.unitOfWork.applicationUserSchema.findOne({ username: username }, { password: false }).exec().then(applicationUser => {
                resolve(applicationUser);
            }).catch(err => {
                reject(err);
            });
        });
    }

    _getUserByUserId(userId) {
        return new Promise((resolve, reject) => {

            this.unitOfWork.userSchema.findOne({ _id: userId }).then(user => {
                resolve(user);
            }).catch(err => {
                reject(err);
            });
        });
    }

    getUserAndApplicationUserByUsernameForAuthentication(username) {

        return new Promise((resolve, reject) => {

            this._getApplicationUserWithoutPasswordByUsername(username.toLowerCase()).then(applicationUser => {

                if (applicationUser) {

                    this._getUserByUserId(applicationUser.userId).then(user => {
                        
                        const userAndApplicationUser = {
                            applicationUser: applicationUser,
                            user: user
                        }

                        resolve(userAndApplicationUser);
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

    userLogin(loginData) {

        return new Promise((resolve, reject) => {

            let loginUsername = loginData.username.toLowerCase();
            this._getApplicationUserByUsername(loginUsername).then(applicationUser => {

                if (applicationUser) {

                    let isMatched = bcrypt.compareSync(loginData.password, applicationUser.password);

                    if (isMatched) {

                        this._getUserByUserId(applicationUser.userId).then(user => {

                            const currentTimeStamp = Math.round(new Date().getTime() / 1000);

                            const payload = {
                                username: applicationUser.username,
                                userLevel: applicationUser.userLevel,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                nic: user.nic,
                                issuedAt: currentTimeStamp,
                                expiresIn: currentTimeStamp + appConfigs.tokenKeyValidPeriod
                            };
                            
                            jwt.sign(
                                payload,
                                appConfigs.secretKey,
                                { expiresIn: appConfigs.tokenKeyValidPeriod, notBefore: 0 },
                                (err, token) => {

                                    if (err) {
                                        reject(err);
                                    }
                                    else {
                                        let tokenData = {
                                            token: token,
                                            username: applicationUser.username,
                                            firstName: user.firstName,
                                            lastName: user.lastName,
                                            nic: user.nic,
                                            userLevel: applicationUser.userLevel,
                                            issuedAt: payload.issuedAt,
                                            expireAt: payload.expireAt
                                        };

                                        resolve(tokenData);
                                    }
                                }
                            );

                        }).catch(err => {
                            reject(err);
                        });
                    }
                    else {
                        resolve(null);
                    }
                }
                else {
                    resolve(null)
                }
            }).catch(err => {
                reject(err);
            })
        });
    }
}

module.exports = new AuthorizationsService();