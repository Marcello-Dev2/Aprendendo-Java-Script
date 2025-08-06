const palindromo = (palavra => {
     const reverse = palavra.split("").reverse().join("")

    if(palavra === reverse){
        return true
    }else{
        return false
    }
})
console.log(palindromo("radr"))
