function inverterString(str){
    return str.split('').reverse().join('');
}

let minhaString = "natan,natan";
let invertida = inverterString(minhaString);

if(minhaString == invertida){
    console.log("True", invertida)
    return true;
}else{
    console.log("False", invertida)

    return false;
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

//verificar se a palavra é um palindromo ou não