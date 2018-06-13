
const createResponse = (status, data = [], message = null, removeProperties = []) => {

    let isSuccess = (status >= 100 && status < 400) ? true : false;
    
    if (!(isSuccess || message)) {
        message = "Something went wrong...";
    }

    if (!data) {
        data = [];
    }
    else if (data.constructor != Array) {
        data = [data];
    }

    let newData = [];

    for (let ind = 0, len = data.length; ind < len; ind++) {

        let tempData = data[ind]._doc;

        if (tempData) {
            tempData.id = tempData._id;
            delete tempData._id;
            delete tempData.__v;

            for (let rInd = 0, rLen = removeProperties.length; rInd < rLen; rInd++) {
                delete tempData[removeProperties[rInd]];
            }
        }
        else {
            tempData = data[ind];
            tempData.id = tempData._id;
            tempData._id = undefined;
            tempData.__v = undefined;

            for (let rInd = 0, rLen = removeProperties.length; rInd < rLen; rInd++) {
                tempData[removeProperties[rInd]] = undefined;
            }
        }

        newData.push(tempData);
    }

    return {
        status: status,
        isSuccess: isSuccess,
        data: newData,
        message: message,
        respondDateTime: new Date()
    };
}

module.exports = createResponse;