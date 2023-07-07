export const longestWord =(sen)=>{

  const arr = sen.replace(/[^a-zA-Z ]/g,"").split(" ")

    arr.sort((a,b)=>{return a.length - b.length})
    return arr
    
}
/*Longest words

-have the function longestword(sen) take the sen parameter being passed and return the largest word in the string.

- if there are two or more that are the lenght, return the first word from the string wiith that lenght.

-ignore punctuation and assume sen will not be empty.
*/