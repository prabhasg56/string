function convertString(data) {

    if (Array.isArray(data)) {
        if (data.length == 0) {
            return "";
        } else {
            let result = data.toString();
            return result.replace(/,/g, ' ');
        }
    }
    else {
        return [];
    }
}

module.exports = convertString;
