import ApiService from './api.service';

export default class AuthService {

    constructor() {

        this.apiService = new ApiService();
        this.tokenData = this.apiService.tokenData;
    }
    
    get isLoggedIn() {
        return (this.tokenData ? true : false);
    }

    get username() {
        
        if (this.isLoggedIn) {
            return this.tokenData.username;
        }
        else {
            return 'Unknown'
        }
    }

    get firstName() {
        
        if (this.isLoggedIn) {
            return this.tokenData.firstName;
        }
        else {
            return 'Unknown'
        }
    }

    get lastName() {
        
        if (this.isLoggedIn) {
            return this.tokenData.lastName;
        }
        else {
            return 'Unknown'
        }
    }

    get nic() {
        
        if (this.isLoggedIn) {
            return this.tokenData.nic;
        }
        else {
            return 'Unknown'
        }
    }

    redirectIfNotLoggedIn() {

        if (!this.isLoggedIn) {
            window.location.href = '/';
        }
    }

    logout() {
        localStorage.removeItem('tokenData');
        window.location.href = '/';
    }
}