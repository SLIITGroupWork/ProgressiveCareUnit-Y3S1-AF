const BaseController = require('../base/controllers/base.controller');
const userService = require('../services/users.service');

class UsersController extends BaseController {

    constructor() {
        super();
        this._removeProperties = ['id'];
    }

    getAllUsers() {

        return new Promise((resolve, reject) => {

            userService.getAllUsers().then(users => {
                resolve(this.createResponse(this.statusCodes.OK, users, null, this._removeProperties));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, undefined, err));
            });
        });
    }

    getUserById(id) {

        return new Promise((resolve, reject) => {

            userService.getUserById(id).then(user => {
                resolve(this.createResponse(this.statusCodes.OK, user, null, this._removeProperties));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, undefined, err));
            });
        });
    }

    getUserByNIC(nic) {

        return new Promise((resolve, reject) => {
            
            userService.getUserByNIC(nic).then(user => {
                resolve(this.createResponse(this.statusCodes.OK, user, null, this._removeProperties));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, undefined, err));
            });
        });
    }

    addNewUser(userRequest) {

        return new Promise((resolve, reject) => {

            userService.addNewUser(userRequest.data).then(user => {
                if (user) {
                    resolve(this.createResponse(this.statusCodes.Created, user, null, this._removeProperties));
                }
                else {
                    resolve(this.createResponse(this.statusCodes.Conflict, undefined, "NIC is already exists", this._removeProperties));
                }
            }).catch(err => {
                
                    
                console.log(err)
                reject(this.createResponse(this.statusCodes.InternalServerError, undefined, err));
            });
        });
    }

    updateUser(userRequest) {

        return new Promise((resolve, reject) => {

            userService.updateUser(userRequest.data).then(user => {
                if (user) {
                    resolve(this.createResponse(this.statusCodes.OK, user, null, this._removeProperties));
                }
                else {
                    resolve(this.createResponse(this.statusCodes.Conflict, undefined, "User is not found", this._removeProperties));
                }
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, undefined, err));
            });
        });
    }
}

module.exports = new UsersController();