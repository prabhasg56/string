function fullNameTitle(data) {
    let arrayObject = Object.entries(data);

    let resultFullNameTitle = arrayObject.reduce((accumulator, current) => {
        accumulator += current[1] + ' ';
        return accumulator;
    }, "");
    return resultFullNameTitle;
}

module.exports = fullNameTitle;
