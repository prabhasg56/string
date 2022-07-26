function extractInteger(str1, str2, str3) {
  let string1 = parseFloat(str1.replace(/[$,]/g, ""));
  let string2 = parseFloat(str2.replace(/[$,]/g, ""));
  let string3 = parseFloat(str3.replace(/[$,]/g, ""));

  if (isNaN(string1)) {
    console.log("0");
  } else {
    console.log(string1);
  }
  if (isNaN(string2)) {
    console.log("0");
  } else {
    console.log(string2);
  }
  if (isNaN(string3)) {
    console.log("0");
  } else {
    console.log(string3);
  }
}

module.exports = extractInteger;
