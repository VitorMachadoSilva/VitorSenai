function isPalindrome(str) {
    // Remover espaços e vírgulas da string
    
    
    // Reverter a string limpa
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Comparar a string original limpa com a string revertida
    return cleanStr === reversedStr;
}

let palavra = "natan,,";
if (isPalindrome(palavra)) {
    console.log("true");  // Saída esperada: true
} else {
    console.log("false");
}


module.exports(isPalindrome())
