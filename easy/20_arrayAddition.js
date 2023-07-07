export const arrayAddition = (arr) => {
  // array içindeki en büyük sayıya ,diğer array içindeki sayıların toplamının eşit olu olmayacağı soruluyor
  //1.yöntem
  /*  let newArr = [...arr];
  let sum = 0;
  let maxValue = Math.max(...newArr);
  newArr.splice(arr.indexOf(maxValue), 1);

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }

  return sum == maxValue ? true : false;
  */
  //2.yöntem
  /*arr.sort((a, b) => a - b);
  let maxValue = arr[arr.length - 1];
  let sum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
  }

  return sum == maxValue ? true : false;*/
  // let maxValue = Math.max(...arr);
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }
  // return sum / 2 === maxValue ? true : false;
  //Benim metodum
  let sortedArr = arr.sort((a, b) => a - b);
  let maxValue = sortedArr[sortedArr.length - 1];
  let sum = 0;
  for (let i = 0; i < sortedArr.length - 1; i++) {
    sum += sortedArr[i];
  }
  if (sum == maxValue) {
    return true;
  }
};
