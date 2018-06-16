import ApiService from './api.service';


export default class PCUService {

    constructor() {
        this.apiService = new ApiService();
    }

    //for user login
    userLogin(loginRequest) {

        return new Promise((resolve, reject) => {

            this.apiService.post('authorizations/userLogin', loginRequest, true).then(loginResponse => {
                resolve(loginResponse);
            });
        });
    }
    
    // patient-registration
    addPatientRegistration(patientRegistrationRequest) {

        return new Promise((resolve, reject) => {

            this.apiService.post('patient-registrations/addNewPatientRegistration', patientRegistrationRequest, true).then(patientRegistrationResponse => {
                resolve(patientRegistrationResponse);
            });
        });
    }

    // add new user 
    addNewUser(userRequest) {

        return new Promise((resolve, reject) => {

            this.apiService.post('users/addNewUser', userRequest).then(usersResponse => {
                resolve(usersResponse);
            });
        })
    }
}