export const userValidation = (str) => {


if(
    str.length >=4 && str.length <=25 && (/[a-zA-Z]/).test(str.charAt(0)) && (/^\w+$/).test(str) && (/[a-zA-Z0-9]/).test(str.slice(-1))
){
    return true
}else{
    return false
}
//and operator
//.length property

//Reg Exp
//.charat() tek bir karekter seçer  .slice() arasındaki karakter kullanır
//.test()

    
}

/*rules

1.the username is between 4 and 25 characters.
2.ıt must start with a letter.
3.ıt can only contain letters,numbers,and the underscore character.
4.ıt cannot end with an underscore character.

if the username is valid then your program should return the string true

u_hello_world123
*/