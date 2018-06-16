const BaseController = require('../base/controllers/base.controller');
const drugService = require('../services/drug.service');

class drugController extends BaseController {

    getAllDrugDetails() {

        return new Promise((resolve, reject) => {

            drugService.getAllDrugDetails().then(data => {
                resolve(this.createResponse(this.statusCodes.OK, true, data));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, false, [], err));
            });
        });
    }

    insertDrug(drugData) {

        return new Promise((resolve, reject) => {

            drugService.addNewDrug(drugData).then(data => {
                resolve(this.createResponse(this.statusCodes.Created, true, data));
            }).catch(err => {
                console.log(err);
                reject(this.createResponse(this.statusCodes.InternalServerError, false, [], err));
            });
        });
    }

    getDrugDetailsByName(drugname) {

        return new Promise((resolve, reject) => {
            //let request = this.createRequest(drugname);

            drugService.getDrugByName(drugname).then(data => {
                resolve(this.createResponse(this.statusCodes.OK, true, data));
            }).catch(err => {
                reject(this.createResponse(this.statusCodes.InternalServerError, false, [], err));
            });
        });
    }


}

module.exports = new drugController();