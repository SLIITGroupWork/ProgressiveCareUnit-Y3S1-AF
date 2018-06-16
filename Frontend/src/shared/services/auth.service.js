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
            'Not logged in'
        }
    }

    logout() {
        localStorage.removeItem('tokenData');
        window.location.href = '/';
    }
}