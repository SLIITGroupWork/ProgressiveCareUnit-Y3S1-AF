const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const BaseService = require('../base/services/base.service');
const appConfigs = require('../../appConfig');

class AuthorizationsService extends BaseService {

    userLogin(loginData) {

        return new Promise((resolve, reject) => {

            let loginUsername = loginData.username.toLowerCase();
            this.unitOfWork.applicationUserSchema.findOne({ username: loginUsername }).then(applicationUser => {

                if (applicationUser) {

                    let isMatched = bcrypt.compareSync(loginData.password, applicationUser.password);

                    if (isMatched) {

                        this.unitOfWork.userSchema.findOne({ _id: applicationUser.userId }).then(user => {

                            let currentTimeStamp = Math.round(new Date().getTime() / 1000);

                            const payload = {
                                username: applicationUser.username,
                                userLevel: applicationUser.userLevel,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                issuedAt: currentTimeStamp,
                                expireAt: currentTimeStamp + appConfigs.tokenKeyValidPeriod
                            };

                            jwt.sign(
                                payload, 
                                appConfigs.secretKey, 
                                { expiresIn: appConfigs.tokenKeyValidPeriod, notBefore: currentTimeStamp },
                                (err, token) => {

                                    if (err) {
                                        reject(err);
                                    }
                                    else {
                                        let tokenData = {
                                            token: token,
                                            username: applicationUser.username,
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