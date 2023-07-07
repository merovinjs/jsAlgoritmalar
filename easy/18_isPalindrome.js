export const isPalindrom = (str) => {
  let a = str.split("").reverse().join("");
  if (str === a) {
    return str;
  } else {
    return false;
  }
};
