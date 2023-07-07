export const aritGeo = (arr) => {
  let diff = arr[1] - arr[0];

  let isArig = true;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != diff) {
      isArig = false;
    }
  }

  document.getElementById("select").innerHTML = isArig;
};
