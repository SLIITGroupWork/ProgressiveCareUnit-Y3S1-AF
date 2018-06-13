const createResponse = require('../../data-trans-objects/response');
const statusCodes = require('../../consts/http-status.consts');

module.exports = class BaseController {

    get statusCodes() {
        return statusCodes;
    }

    createResponse(status, data = [], message = null, removeProperties = []) {
        return createResponse(status, data, message, removeProperties);
    }
}