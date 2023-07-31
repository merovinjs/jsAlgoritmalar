export const secondGreatLow = (arr) => {
  //yeni bir dizi oluştur ve var olan dizinin içindeki tekrar eden sayıları çıkar
  let newArr = [];

  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};
