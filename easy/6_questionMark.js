export const qestionMark =(str)=>{
    if(str.length<5){
        return false
    }

    const newstr =str.replace(/[^0-9?]/g,"")

    const arr =newstr.split("")
    
    let sum=0;
    let sums=[];
    let iterator=0;

    arr.forEach((item) => {
        if(item!="?"){
            sum=parseInt(item)+parseInt(arr[iterator+4])
            sums.push(sum)
        }
        iterator+=1
        

        return console.log(sums.includes(10) ?true : false) 
      
    });
 
  

 



    //verilen string ifade içerisinde rakamlar arasındaki üç soru işareti olacak ve baş ve sondaki rakamların toplamı 10 olursa true diğer durumlarda false dönsün.
    //örnek:'fdsadf5???5dfa4???6fsaf'
}

