export const letterCount = (str) => {
  //en fazla harf tekrarı yapan kelimeyi dön eger eşit sayıda başka bir kelime varsa ilk kelimeyi dön
  let arr = str
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .split(" ");
  let kelimeNesneleri = [];

  for (let i = 0; i < arr.length; i++) {
    let obj = {};
    arr[i].split("").forEach((char) => {
      char in obj ? obj[char]++ : (obj[char] = 1);
    });
    kelimeNesneleri.push(obj);
  }
  let maxFrequencies = [];
  kelimeNesneleri.forEach((obj) => {
    maxFrequencies.push(Math.max(...Object.values(obj)));
  });
  let maxValue = Math.max(...maxFrequencies);

  return maxValue < 2
    ? -1
    : arr[maxFrequencies.indexOf(maxValue)]
    ? arr[maxFrequencies.indexOf(maxValue)]
    : -1;
};
