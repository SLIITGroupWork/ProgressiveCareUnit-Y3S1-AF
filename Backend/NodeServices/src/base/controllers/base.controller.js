const createResponse = require('../../data-trans-objects/response');
const createRequest = require('../../data-trans-objects/resquest');
const statusCodes = require('../../consts/http-status.consts');

module.exports = class BaseController {

    get statusCodes() {
        return statusCodes;
    }

    createRequest(request = { }) {
        return createRequest(request);
    }

    createResponse(status, data = [], message = null, removeProperties = []) {
        return createResponse(status, data, message, removeProperties);
    }
}