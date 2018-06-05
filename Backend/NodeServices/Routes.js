const Express = require('express');

var Routes = Express.Router();
var FeedbackRoute = require('./src/Router/Comment.Router');

Routes.use('/feedbacks', FeedbackRoute);

module.exports = Routes;