var gelen =document.querySelector("input")
var göster=document.querySelector("h3")

var sayi,donustur;
var liste=[];

function sifreDegistir(){
    for(var i=0;i<6;i++){
        sayi=Math.floor(Math.random()*91);

        if(sayi<65){
            sayi=Math.floor(Math.random()*25+65)

        }
        liste[i]=String.fromCharCode(sayi);
        donustur=liste.join('')

        göster.innerHTML='şifre : '+donustur;
    }
}

function kontrolet(){
    var kontral=gelen.value.toLocaleUpperCase();
    if(kontral==donustur){
        alert('başarılı')
    }else{
        alert ('hata')
        sifreDegistir()
    }
}
