var nome = "Flavio";
var idade = 30;
var idadeString = "30";
var lista = [1,2,3,4,5];
var dicionario = {nome: nome, idade: idade}
var listaDicionario = [{ nome: "melancia", peso: "5 kg", custo: 5.50},
                       { nome: "Umbu", peso: "0,10 kg", custo: 0.40 }];

//alert(nome + " tem " + idade + " anos");

/*var idade = 0;
while (idade == 0)
{
    idade = prompt("Voce tem 18 anos ou mais?");
    if (idade < 18 & idade > 0) alert("Sinto muito, voce nao pode acessar este conteudo")
    else if (idade >= 18) alert("Nao minta ein!");
    else if (idade.valueOf(String)) 
        {
            alert("Digite sua idade");
            idade = 0;
        }
}*/

/*
var mensagem = "";

while(mensagem == "")
{
    idade = prompt("Voce tem 18 anos ou mais?");
    validaIdade(idade);
}

alert(mensagem);

function validaIdade(idade) 
{
    if (idade < 18 & idade > 0){
        mensagem = "Sinto muito, voce nao pode acessar este conteudo";
    }
    else if (idade >= 18){
        mensagem = "Não minta madafoca!"
    }
}
*/

function verHora(){
    var data = new Date();
    alert("Agora são exatamente " + data.toTimeString().substring(0,8));
    document.getElementById("horaPesquisada").innerHTML = "Ultima pesquisa realizada as " + data.toTimeString().substring(0,8);
}

function HoraUniversal(){
    window.open("https://time.is/pt_br/UTC")
    document.getElementById("HoraUniversal").style.cursor = "pointer"
}

function mousePointer(elemento){
    //document.getElementById("HoraUniversal").style.cursor = "pointer"
    elemento.style.cursor = "pointer";
}

function selectCor(elemento){
    elemento.style.color = elemento.value;
}

var data = new Date();

console.log(idade + idade);
console.log(idadeString + idadeString);
console.log(lista);
lista.push(9)
lista.push(11)
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.join(" - "));
console.log(dicionario);
console.log(dicionario.nome);
console.log(listaDicionario);
console.log(data.toDateString());