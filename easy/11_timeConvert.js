export const timeConvert=(num)=>{
const sny =num%60;
const dkk=Math.floor(num/60)

return dkk+":"+sny
}