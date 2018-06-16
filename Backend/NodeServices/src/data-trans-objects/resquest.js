
/**
 * Create Request
 * Incoming request 
 * {
 *  data: { <incoming data here> }
 * }
 * @param {request} request 
 * @returns { data: data, requestDateTime: CurrentTime } Created request
 */
const createRequest = (request = {}) => {

    if (!request) {
        request = {};
    }

    request.requestDateTime = new Date();

    return request;
}

module.exports = createRequest;