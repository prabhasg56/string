function breakIP(string) {
    let splitIPAdd = string.split('.');
    //console.log(splitIPAdd)
    
    let resultSplitIp = splitIPAdd.map((splitedPart) => {
        if (isNaN(splitedPart)) {
            return null;
        } else {
            return parseInt(splitedPart);
        }
    });
    return resultSplitIp;
}

module.exports = breakIP;
