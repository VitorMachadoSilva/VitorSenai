let login = '', senha = '', article, div, h3, p1, input, p2, span, aLink, main, section, footer, h2, p3, span2, loginAut, totalCarrinho, totalGeral, div2;
let usr = [];
let snh = [];
let produto = [];
let cod = [];
let preco = [];
let link = [];
let qtd = [];
let totalCompra = [];

// Carregar dados do localStorage, se existirem
if(localStorage.prodArr){
    produto = JSON.parse(localStorage.getItem('prodArr'));
}

if(localStorage.codArr){
    cod = JSON.parse(localStorage.getItem('codArr'));
}

if(localStorage.precoArr){
    preco = JSON.parse(localStorage.getItem('precoArr'));
}

if(localStorage.linkArr){
    link = JSON.parse(localStorage.getItem('linkArr'));
}

if(localStorage.qtdArr){
    qtd = JSON.parse(localStorage.getItem('qtdArr'));
}

if(localStorage.totCompArr){
    totalCompra = JSON.parse(localStorage.getItem('totCompArr'));
}

main = document.createElement('main');
main.setAttribute('class', 'container');
document.body.append(main);

section = document.createElement('section');
section.setAttribute('class', 'products-container');
main.append(section);

// Criar elementos para cada produto
for(let i = 0; i < produto.length; i++){ 
    article = document.createElement('article');
    article.setAttribute('class', 'card');
    section.append(article);

    div = document.createElement('div');
    div.setAttribute('class', 'product-image');
    div.setAttribute('id', 'img-' + i);
    article.append(div);
    document.getElementById('img-' + i).style.backgroundImage = 'url("../imagens/img' + i + '.jpg")';

    h3 = document.createElement('h3');
    h3.setAttribute('id', 'nome' + i);
    h3.innerHTML = produto[i];
    article.append(h3);

    p1 = document.createElement('p');
    p1.innerHTML = 'Qtd';
    article.append(p1);

    input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('value', '1');
    input.setAttribute('min', '1');
    input.setAttribute('max', '10');
    input.setAttribute('id', 'qtd-' + i);
    p1.append(input);

    p2 = document.createElement('p');
    p2.innerHTML = 'R$ ';

    span = document.createElement('span');
    span.setAttribute('id', cod[i])
    span.setAttribute('class', 'bold');
    if (preco[i] !== undefined && preco[i] !== null) {
        span.innerHTML = preco[i].toFixed(2).replace('.', ',');
    } else {
        span.innerHTML = '0,00'; // Valor padrão caso não haja preço definido
    }
    p2.append(span);
    article.append(p2);

    aLink = document.createElement('a');
    aLink.setAttribute('class', 'btn');
    aLink.setAttribute('onclick', "compra(" + "'" + 'qtd-' + i + "'" + ',' + "'" + cod[i] + "'" + ',' + i + ")")
    aLink.setAttribute('href', 'http://www.amazon.com.br/' + link[i]);
    aLink.setAttribute('target', '_blank');
    aLink.innerHTML = 'Comprar';
    article.append(aLink);
}

footer = document.createElement('footer');
footer.setAttribute('id', 'rodape');
document.body.append(footer);

h2 = document.createElement('h2');
h2.innerHTML = 'Informações sobre o site';
footer.append(h2);

p3 = document.createElement('p');
p3.innerHTML = '&copy; 2024';
footer.append(p3);

aLink2 = document.createElement('a');
aLink2.setAttribute('id', 'adm');
aLink2.setAttribute('href', 'atualizacao.html');
aLink2.innerHTML = 'Administração';
footer.append(aLink2);

// Função para salvar dados inseridos
function getDados(){
    // QUANTIDADE
    if(localStorage.qtdArr){
        qtd = JSON.parse(localStorage.getItem('qtdArr'));
    }

    qtd.push(0);
    localStorage.qtdArr = JSON.stringify(qtd);

    // TOTAL DA COMPRA
    if(localStorage.totCompArr){
        totalCompra = JSON.parse(localStorage.getItem('totCompArr'));
    }

    totalCompra.push(0);
    localStorage.totCompArr = JSON.stringify(totalCompra);

    // PRODUTO
    if(localStorage.prodArr){
        produto = JSON.parse(localStorage.getItem('prodArr'));
    }

    let prod = document.querySelector('#produto').value;
    produto.push(prod);
    localStorage.prodArr = JSON.stringify(produto);
    document.querySelector('#produto').value = '';

    // CÓDIGO
    if(localStorage.codArr){
        cod = JSON.parse(localStorage.getItem('codArr'));
    }

    let codig = document.querySelector('#codigo').value;
    cod.push(codig);
    localStorage.codArr = JSON.stringify(cod);
    document.querySelector('#codigo').value = '';

    // PREÇO
    if(localStorage.precoArr){
        preco = JSON.parse(localStorage.getItem('precoArr'));
    }

    let prec = document.querySelector('#preco').value;
    preco.push(parseFloat(prec.replace(',', '.')));
    localStorage.precoArr = JSON.stringify(preco);
    document.querySelector('#preco').value = '';

    // LINK
    if(localStorage.linkArr){
        link = JSON.parse(localStorage.getItem('linkArr'));
    }

    let lnk = document.querySelector('#linkAmazon').value;
    link.push(lnk);
    localStorage.linkArr = JSON.stringify(link);
    document.querySelector('#linkAmazon').value = '';

    alert("Dados inseridos com sucesso!");
}

// Função para criar um novo login
function criaLogin(){
    if(localStorage.usrArr){
        usr = JSON.parse(localStorage.getItem('usrArr'));
    }

    if(localStorage.snhArr){
        snh = JSON.parse(localStorage.getItem('snhArr'));
    }

    let novoUsr = prompt("Login: ");
    usr.push(novoUsr);
    localStorage.usrArr = JSON.stringify(usr);

    let novaSnh = prompt("Senha: ");
    snh.push(novaSnh);
    localStorage.snhArr = JSON.stringify(snh);

    if(usr.includes(novoUsr) && snh.includes(novaSnh)){
        alert("Login criado com sucesso!");
    } else {
        alert("Login não pode ser criado!");
    }
}

// Função para abrir a tela de login
function abreTelaLogin(){
    if(localStorage.usrArr){
        usr = JSON.parse(localStorage.getItem('usrArr'));
    }

    if(localStorage.snhArr){
        snh = JSON.parse(localStorage.getItem('snhArr'));
    }

    login = prompt("Login: ");
    senha = prompt("Senha: ");
    let indUsr = usr.indexOf(login);

    if(usr[indUsr] == login && snh[indUsr] == senha){
        document.querySelector("#login").innerHTML = `Bem-vindo, ${login}`;
    } else {
        alert("Digite um usuário/senha correto!");
    }
}

function compra(qtdID, produt, posArr){
    if(localStorage.posArr){
        qtd[posArr] = parseInt(document.getElementById(qtdID).value)
    }else{
        localStorage.posArr = JSON.stringify(qtd)
    }
    totalCompra[posArr] = qtd[posArr] * parseFloat(document.getElementById(produt).innerText.replace(",", "."))
    localStorage.qtdArr = JSON.stringify(qtd)
    localStorage.totCompArr = JSON.stringify(totalCompra)
}

function calculaCesta(){
    usr = JSON.parse(localStorage.getItem('usrArr'))
    loginAut = localStorage.getItem('loginAutenticado')
    if(usr.includes(login)){
        let textoCarrinho = ''
        for(i in qtd){
            if(qtd[i] > 0){
                totalGeral += totalCompra[i]
                totalCarrinho += qtd[i]+" x " + preco[i].toFixed(2).replace('.', ',') + " - Boneco " + produto[i] + 
                " R$ " + totalCompra[i].toFixed(2).replace('.', ',') + "\n"
            }
        }
        if(totalGeral > 0){
            alet(`${textoCarrinho}
            ===========================================================================
            Total da Compra                                             R$ ${totalGeral
            .toFixed(2).replace('.', ',')}`)
            let text = 'Confirme ou cancele a sua compra!\nPressione "OK" para comprar ou "Cancelar" para desistir da compra.'
            if(comfirm(text)){
                alert("Compra efetuada com sucesso!")
                for(i in qtd){
                    qtd[i] = 0
                }localStorage.qtdArr = JSON.stringify(qtd)
                window.location.reload()
            }else{
                alert("Compra não realizada!")
                totalGeral = 0
            }
        }else{
            alert('Seu carrinho está vazio!')
        }
    }else{
    }
}

function abreLink(posArr){
    localStorage.setItem('produtoIndividual', produto[posArr])
    //setItem - armazena valores no localStorage
    localStorage.setItem('descricaoIndividual', descricao[posArr])
    let url_atual = window.location.href
    if(url_atual != "https://127.0.0.1:5500/produto.html" && 
    url_atual != "https://127.0.0.:5500/produto.html#"){
        window.location.href = "/produto.html"
    }
}

function carregaProduto(){
    let produtoCompra = localStorage.getItem('produtoIndividual')
    let desCompra = localStorage.getItem('descricaoIndividual')
    let pos = produto.indexOf(produtoCompra)
    documento.getElementById("tituloProduto").innerHTML = produtoCompra
    document.getElementById("descProduto").innerHTML = descCompra
    document.getElementById('imgProd').style.backgroundImage = 'url (imagens/img' + pos + ".jpg)"
    div2 = document.createElement("div")
    div2.setAttribute('class', 'card')
    document.body.append(div2)
    p1 = document.createAttribute('p')
    p1.innerHTML = 'Qtd: '
    div2.append(p1)
    input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('value', '1')
    input.setAttribute('min', '1')
    input.setAttribute('max', '10')
    input.setAttribute('id', 'qtd-' + pos)
    p1.append(input)
    p2 = document.createAttribute('p')
    p2.innerHTML = 'R$ '
    span = document.createElement('span')
    span.setAttribute('id', cod[pos])
    span.setAttribute('class', 'bold')
    span.innerHTML = preco[pos].toFixed(2).replace('.', ',')
    p2.append(span)
    div2.append(p2)
    aLink = document.createElement('a')
    aLink.setAttribute('onclick', "compra("+"'"+'qtd-' + pos + "'" + ',' + "'" + cod[pos] + "'" + ',' + pos + ")")
    aLink.setAttribute('', '')
}
