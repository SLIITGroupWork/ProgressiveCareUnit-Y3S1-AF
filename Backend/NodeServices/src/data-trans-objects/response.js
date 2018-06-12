
const createResponse = (status, isSuccess, data = [], message = null) => {

    if (!(isSuccess || message)) {
        message = "Something went wrong...";
    }

    if (!data) {
        data = [];
    }
    else if (data.constructor != Array) {
        data = [data];
    }

    return {
        status: status,
        isSuccess: isSuccess,
        data: data,
        message: message,
        respondDateTime: new Date()
    };
}

module.exports = createResponse;