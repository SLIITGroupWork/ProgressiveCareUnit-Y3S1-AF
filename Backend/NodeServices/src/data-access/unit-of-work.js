const schemaMapper = require('./db-schema/schema-mapper');
const tableNames = require('./db-schema/table-names.const');

const userSchema = schemaMapper.model(tableNames.Users);
const patientRegistrationSchema = schemaMapper.model(tableNames.PatientRegistrations);
const userPatientRegistrationSchema = schemaMapper.model(tableNames.UserPatientRegistrations);
const applicationUserSchema = schemaMapper.model(tableNames.ApplicationUsers);

const presciptionSchema = schemaMapper.model(tableNames.Presciptions);
const drugsSchema = schemaMapper.model(tableNames.Drugs);
const prescriptionDrugsSchema = schemaMapper.model(tableNames.PrescriptionDrugs);
const billSchema = schemaMapper.model(tableNames.bill);

const patientAllergiesSchema=schemaMapper.model(tableNames.PatientAllergies);
const patientPhysicalExamsSchema=schemaMapper.model(tableNames.PatientPhysicalExams);
const userPatientAllergiesSchema=schemaMapper.model(tableNames.UserPatientAllergies);

const commentSchema = schemaMapper.model(tableNames.Comments);
const doctorSchema = schemaMapper.model(tableNames.Doctor);
const doctorPatientSchema = schemaMapper.model(tableNames.DoctorPatient);

module.exports = {
    userSchema: userSchema,
    patientRegistrationSchema: patientRegistrationSchema,
    userPatientRegistrationSchema: userPatientRegistrationSchema,
    applicationUserSchema: applicationUserSchema,

    presciptionSchema: presciptionSchema,
    drugsSchema: drugsSchema,
    prescriptionDrugsSchema: prescriptionDrugsSchema,
    billSchema:billSchema,

    commentSchema: commentSchema,
    doctorSchema: doctorSchema,
    doctorPatientSchema: doctorPatientSchema,

    patientAllergiesSchema:patientAllergiesSchema,
    patientPhysicalExamsSchema:patientPhysicalExamsSchema,
    userPatientAllergiesSchema:userPatientAllergiesSchema
}