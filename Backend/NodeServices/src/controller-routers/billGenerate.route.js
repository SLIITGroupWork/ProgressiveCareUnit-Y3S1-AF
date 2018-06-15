const express = require('express');
const router = express.Router();
const billGenerateController = require('../controllers/billGenerate.controller');
const createRequest = require('../data-trans-objects/resquest');
const httpStatus = require('../consts/http-status.consts');

router.get('/generateBill/:patientId', (request, response) => {

    let billRequest = createRequest(request.body);

    //     billGenerateController.generateBill(request.params.patientId,billRequest).then(billResponse => {
    //     response.status(billResponse.status).send(billResponse);
    // }).catch(err => {
    //     response.status(err.status ? err.status : httpStatus.InternalServerError).send(err);
    // });
    const doc = new PDFDocument()
    let filename = request.body.filename
    // Stripping special characters
    filename = encodeURIComponent(filename) + '.pdf'
    // Setting response to 'attachment' (download).
    // If you use 'inline' here it will automatically open the PDF
    response.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
    response.setHeader('Content-type', 'application/pdf')
    //const content = req.body.content
    const content =billGenerateController.generateBill(request.params.patientId,billRequest);
    doc.y = 300
    doc.text(content, 50, 50);
    doc.pipe(res);
    doc.end();
});




module.exports = router;
