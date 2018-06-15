const BaseController = require('../base/controllers/base.controller');
const authorizationService = require('../services/authorizations.service');

class AuthorizationsController extends BaseController {

    userLogin(loginRequest) {

        return new Promise((resolve, reject) => {

            authorizationService.userLogin(loginRequest.data).then(tokenData => {
                if (tokenData) {
                    resolve(this.createResponse(this.statusCodes.OK, tokenData, "User login successfull", ['id']));
                }
                else {
                    resolve(this.createResponse(this.statusCodes.Unauthorized, null, "Username or password invalid"));
                }
            }).catch(err => {
               reject(this.createResponse(this.statusCodes.InternalServerError, null, err)); 
            });
        })
    }
}

module.exports = new AuthorizationsController();