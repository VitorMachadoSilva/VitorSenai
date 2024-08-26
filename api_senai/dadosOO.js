var dados = {
    nome: {
        primeiro_nome: "Vitor",
        ultimo_nome: "Machado Silva"
    },
    email: "vitor_machado-silva@estudante.sesisenai.org.br",
    assunto: "Aprendendo OO",

    toString: function (){
        
    }
    
};

dados.assunto = "Aprendendo DataBase";
console.log(dados.assunto);
//ou
dados['assunto'] = "Aprendendo OO de novo";
console.log(dados.assunto);

//novo membro
dados.altura = 1.78;
console.log(dados);
delete dados.altura;
console.log(dados);





