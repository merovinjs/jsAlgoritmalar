export const letterChange =(str)=>{
    let newstr= str.toLowerCase().replace(/[a-z]/gi,(char)=>{
        if(char === "z"){
            return "a"
        }else{
            return String.fromCharCode(char.charCodeAt()+1)
        }
    })

    let vowelCapitalize = newstr.replace(/a|e|ı|i|o|u/gi,char =>char.toUpperCase())

    return vowelCapitalize


}
//verilen string ifade deki harfleri alpabedeki bir sonraki harf ile değiştir .
//sesli harleri büyük harfe çevir