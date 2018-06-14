const BaseController = require('../base/controllers/base.controller');
const userService = require('../services/users.service');

class UsersController extends BaseController {

    getAllUsers() {

        return new Promise((resolve, reject) => {

            userService.getAllUsers().then(users => {
                resolve(this.createResponse(this.statusCodes.OK, users));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, undefined, err));
            });
        });
    }

    getUserById(id) {

        return new Promise((resolve, reject) => {

            userService.getUserById(id).then(user => {
                resolve(this.createResponse(this.statusCodes.OK, user));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, undefined, err));
            });
        });
    }

    getUserByNic(nic) {

        return new Promise((resolve, reject) => {

            userService.getUserByNic(nic).then(user => {
                resolve(this.createResponse(this.statusCodes.OK, user));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, undefined, err));
            });
        });
    }

    addNewUser(user) {

        return new Promise((resolve, reject) => {

            userService.addNewUser(user).then(user => {
                if (user) {
                    resolve(this.createResponse(this.statusCodes.Created, user));
                }
                else {
                    resolve(this.createResponse(this.statusCodes.Conflict, undefined, "NIC is already used"));
                }
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, undefined, err));
            });
        });
    }
}

module.exports = new UsersController();