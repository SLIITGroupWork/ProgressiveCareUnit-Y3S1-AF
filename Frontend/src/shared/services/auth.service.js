const apiService = require('./api.service');

class AuthService {

    constructor() {
        this.tokenData = apiService.tokenData;
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
        window.location.href = '/login';
    }
}

module.exports = new AuthService();