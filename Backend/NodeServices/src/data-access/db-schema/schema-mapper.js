const mongoose = require('mongoose');
const tableNames = require('./table-names.const');

// Importing schemas
const userSchema = require('./schemas/user.scema');
const patientRegistrationSchema = require('./schemas/patient-registration.schema');
const userPatientRegistrationSchema = require('./schemas/user-patient-registration.schema');
const applicationUserSchema = require('./schemas/application-user.schema');

const presciptionSchema = require('./schemas/presciption.schema');
const drugsSchema = require('./schemas/drug.schema');
const prescriptionDrugsSchema = require('./schemas/prescription-drug.schema');

const commentSchema = require('./schemas/user.scema');

// Create Mongo models
mongoose.model(tableNames.Users, userSchema);
mongoose.model(tableNames.PatientRegistrations, patientRegistrationSchema);
mongoose.model(tableNames.UserPatientRegistrations, userPatientRegistrationSchema);
mongoose.model(tableNames.ApplicationUsers, applicationUserSchema);

mongoose.model(tableNames.Presciptions, presciptionSchema);
mongoose.model(tableNames.Drugs, drugsSchema);
mongoose.model(tableNames.PrescriptionDrugs, prescriptionDrugsSchema);

mongoose.model(tableNames.Comments, commentSchema);

module.exports = mongoose;