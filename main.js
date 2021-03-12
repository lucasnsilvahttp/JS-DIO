// JASON E ARRAY


function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
    window.open("https://www.youtube.com/watch?v=ETecZsoA0jo")
    //window.location.href = "https://www.youtube.com/watch?v=ETecZsoA0jo";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

//function redirecionar(){ - HTML COM onclick="redirecionar() NO ELEMENTO.
//    window.open("https://www.youtube.com/watch?v=ETecZsoA0jo") - AO CLICAR ABRE UMA ABA COM O LINK
//    window.location.href = "https://www.youtube.com/watch?v=ETecZsoA0jo"; - AO CLICAR ABRE O LINK NA MSM PAGINA
//} document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; - TROCA O QUE TA ESCRITO NO HTML PARA O QUE TA ESCRITO AQUI NO JS SÓ DE PASSAR O MOUSE. 

//function voltar(){
//  document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; 
// COM O HTML ASSIM > onmouseover="trocar()" onmouseout="voltar()
// ELE VAI PRA UM ESTADO E VOLTA PRO ESTADO AO TIRAR O MOUSE DE CIMA. 

/*

VALIDAR IDADE COM FUNÇÕES
 
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

//alert(soma(5, 10));

*/ 





/*
var d = new Date();
alert(d.getDay());
alert(d.getFullYear());
alert(d.getHours());
alert(d.getMinutes());
*/



/*
var idade = prompt("Qual sua idade? ")
if (idade >=18) {
    alert("maior de idade")
}else{
    alert("Menor de idade")
}
*/

/*
 ESTRUTURA DE REPETIÇÃO COM *WHILE*

var count = 0;
while (count <= 5){
    console.log(count); OR alert(count);
    count = count + 1; or count++;
}
*/

/*

ESTRUTURA DE REPETIÇÃO COM *FOR*
var count;
for(count=0; count <=5; count++){
    console.log(count); OR alert(count);
};
*/

/*
 MOSTRAR A DATA COMPLETA

var d = new Date();
alert(d);

MOSTRAR APENAS UM OU ALGUNS ELEMENTOS DA DATA

var d = new Date();
alert(d.getMonth() +1); - ele sempre começa a contar do 0 (o month), então coloque o +1

getDay, getMinutes, getFullYear, getHours

*/


//alert(frase.replace("Japão", "Brail")); - TIRA A PALAVRA JAPÃO E COLOCA BRASIL.
//console.log(frase.replace("Japão", "Brasil")); - TIRA A PALAVRA JAPÃO E COLOCA BRASIL.
//console.log(frase.toLowerCase()); - MINUSCULO.
//console.log(frase.toUpperCase()); - MAIUSCULO.
//console.log(idade + idade2); - SOMANDO / MOSTRANDO VARIAVEIS NUMÉRICAS.
//console.log(nome); - MOSTRANDO NOME. 
//alert(idade + idade2) - APARECE O ALERTA SOMANDO OS NUMEROS.
//alert(nome + " tem " + idade + " anos"); - CONCATENANDO VARIAVEIS.
//var frase = "Japão is the best team player off the world"
//var idade2 = 10;
//var idade = 20;
//var nome = "nogxHTTP"
//console.log(lista[2]); - MOSTRA SÓ O ELEMENTO 2 DA LISTA, 0, 1, 2
//lista.push("uva") ADICIONA UM ELEMENTO A LISTA - NO F I N A L DELA. 
//lista.pop(); - RETIRA UM ELEMENTO DA LISTA - DO FINAL. 
//console.log(lista.length) - .LENGTH SERVE PARA VER O TAMANHO DA LISTA
//console.log(lista.reverse()); - COLOCA A LISTA TOTALMENTE AO CONTRÁRIO
//console.log(lista.tostring()); - ELE TRANSFORMA EM STRING PERDENDO A REFERENCIA DE ARRAY.
//console.log(lista.toString()[0]);  - COMO É STRING, VAI MOSTRAR SÓ A PRIMEIRA LETRA
//console.log(lista.join(" - ")); - COLOCA QUALQUER ELEMENTO PARA SEPARAR AS PALAVRAS AO INVES DA ","
//var fruta = {nome: "Maçã", cor:"vermelha"}; - ADICIONA ATRIBUTOS A FRUTA
// var frutas = [{nome: "Maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}]; -LISTA DE DICIONARIO
//console.log(frutas);
//alert(frutas[1].nome);
// var idade = prompt("Qual sua idade? ") - COMANDO PROMPT VAI EXIBIR UMA PERGUNTA, O QUE ELE RESPONDER VAI SER GRAVADO NA VARIAVEL E O CODIGO VAI DECIDIR O QUE FAZER COM A INFORMAÇÃO.