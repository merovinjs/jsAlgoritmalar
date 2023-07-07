export const simpleSembols =(str)=>{
    

const arr =str.split('')
let controllArr=[]
arr.forEach((char)=>{
if((/[a-zA-Z]/).test(char)){
 if(arr[arr.indexOf(char)-1]==='+'&& arr[arr.indexOf(char)+1]==='+'){
    controllArr.push(1)
 }else{
    controllArr.push(0)
 }
 
}
console.log(controllArr)

})
if(controllArr.includes(0)){
    return false
}else{
    return true
}


    //verilen stringin içerisndeki harflerin başında ve sonunda + işareti varsa true yoksa false döndür 
}