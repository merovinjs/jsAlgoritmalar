export const vowelCount = (str) => {
  let i = 0;
  [...str].forEach((element) => {
    if (/[a,A,e,E,u,U,ı,I,i,İ,o,O,ü,Ü]/.test(element)) {
      i = i + 1;
    }
  });
  return i;
};
