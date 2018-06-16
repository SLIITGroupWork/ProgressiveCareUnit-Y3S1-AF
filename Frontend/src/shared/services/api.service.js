import axios from 'axios';

export default class ApiService {

    _setTokenData(tokenData) {
        localStorage.setItem('tokenData', JSON.stringify(tokenData));
    }

    get tokenData() {
        return JSON.parse(localStorage.getItem('tokenData'));
    }

    get headers() {
        let headers = {
            'Content-Type': 'application/json'
        }

        let tokenData = this.tokenData;

        if (tokenData) {
            headers['Authorization'] = `Bearer ${tokenData.token}`
        }

        return headers;
    }

    _createResponse(status, response) {
        
        if (status === 401) {

            localStorage.removeItem('tokenData');

            window.location.href = '/login';

            return {
                status: status,
                isSuccess: false,
                data: [],
                message: 'Unauthorized',
                respondDateTime: new Date(response.respondDateTime)
            }
        }

        return {
            status: response.status,
            isSuccess: response.isSuccess,
            data: response.data,
            message: response.message,
            respondDateTime: new Date(response.respondDateTime)
        };
    }

    get(url) {

        return new Response((resolve, reject) => {

            axios.get(url, { headers: this.headers }).then(response => {
                resolve(this._createResponse(response.request.status, response.data));
            }).catch(err => {
                resolve(this._createResponse(err.request.status, err.request.response));
            });
        });
    }

    post(url, request, isLogin = false) {

        return new Promise((resolve, reject) => {

            axios.post(url, request, { headers: this.headers }).then(response => {

                let dataResponse = this._createResponse(response.request.status, response.data);

                if (isLogin) {
                    this._setTokenData(dataResponse.data[0]);
                }

                resolve(dataResponse);
            }).catch(err => {
                resolve(this._createResponse(err.request.status, err.request.response));
            });
        });
    }

    put(url, request) {

        return new Promise((resolve, reject) => {

            axios.put(url, request, { headers: this.headers }).then(response => {
                resolve(this._createResponse(response.request.status, response.data));
            }).catch(err => {
                resolve(this._createResponse(err.request.status, err.request.response));
            });
        });
    }
}

module.exports = new ApiService();