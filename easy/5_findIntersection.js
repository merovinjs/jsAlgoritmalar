export const findIntersection =(arr)=>{

    let ıntersection =[]

    const kume1=arr[0].replace(/\s/g,"").split(',')
    const kume2=arr[1].replace(/\s/g,'').split(',')

    kume2.forEach((item) => {
        if(kume1.includes(item)){
            ıntersection.push(item)
        }
    });
    if(ıntersection.length !=0){
        return ıntersection.toString()
    }else{
        return false
    }
}
// array içerisinde ki iki adet string ifade içinde aynı bulunan ifadelerler varsa ver yoksa false döndür

//["1, 3, 5, 13","1, 3, 45, 66"]