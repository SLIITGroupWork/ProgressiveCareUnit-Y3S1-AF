const unitOfWork = require('../../data-access/unit-of-work');

module.exports = class BaseService {

    get unitOfWork() {
        return unitOfWork;
    }
}