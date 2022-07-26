function month(data) {
  const splitedStringArr = data.split('/')
  //console.log(splitedStringArr)

  if (splitedStringArr[1] == 1) {
    return "january";
  } else if ((splitedStringArr[1] == 2)) {
    return "february";
  } else if ((splitedStringArr[1] == 3)) {
    return "march";
  } else if ((splitedStringArr[1] == 4)) {
    return "april";
  } else if ((splitedStringArr[1] == 5)) {
    return "may";
  } else if ((splitedStringArr[1] == 6)) {
    return "june";
  } else if ((splitedStringArr[1] == 7)) {
    return "july";
  } else if ((splitedStringArr[1] == 8)) {
    return "august";
  } else if ((splitedStringArr[1] == 9)) {
    return "september";
  } else if ((splitedStringArr[1] == 10)) {
    return "october";
  } else if ((splitedStringArr[1] == 11)) {
    return "november";
  } else if ((splitedStringArr[1] == 12)) {
    return "december";
  } else {
    return undefined
  }
}

module.exports = month;