const mongoose = require('mongoose');
const tableNames = require('./table-names.const');
// const databaseInit = require('../../../configurations/database.configurations');

// Importing schemas
const userSchema = require('./schemas/user.scema');
const patientRegistrationSchema = require('./schemas/patient-registration.schema');
const userPatientRegistrationSchema = require('./schemas/user-patient-registration.schema');
const applicationUserSchema = require('./schemas/application-user.schema');

const presciptionSchema = require('./schemas/presciption.schema');
const drugsSchema = require('./schemas/drug.schema');
const prescriptionDrugsSchema = require('./schemas/prescription-drug.schema');
const billSchema = require('./schemas/bill.schema');

const patientAllergiesSchema = require('./schemas/patient-allergies.schema');
const patientPhysicalExamsSchema = require('./schemas/patient-physical-exams.schema');
const userPatientAllergiesSchema = require('./schemas/user-patient-allergies.schema');

const commentSchema = require('./schemas/user.scema');
const doctorSchema = require('./schemas/doctor.schema');
const doctorPatientSchema = require('./schemas/doctor-patient.schema');


// Create Mongo models
mongoose.model(tableNames.Users, userSchema);
mongoose.model(tableNames.PatientRegistrations, patientRegistrationSchema);
mongoose.model(tableNames.UserPatientRegistrations, userPatientRegistrationSchema);
mongoose.model(tableNames.ApplicationUsers, applicationUserSchema);

mongoose.model(tableNames.Presciptions, presciptionSchema);
mongoose.model(tableNames.Drugs, drugsSchema);
mongoose.model(tableNames.PrescriptionDrugs, prescriptionDrugsSchema);
mongoose.model(tableNames.bill, billSchema);

mongoose.model(tableNames.PatientAllergies, patientAllergiesSchema);
mongoose.model(tableNames.UserPatientAllergies, userPatientAllergiesSchema);
mongoose.model(tableNames.PatientPhysicalExams, patientPhysicalExamsSchema);

mongoose.model(tableNames.Comments, commentSchema);
mongoose.model(tableNames.Doctor, doctorSchema);
mongoose.model(tableNames.DoctorPatient, doctorPatientSchema);

module.exports = mongoose;