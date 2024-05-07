//let nome = "\"Stélvio\"";

//let frutas = "Apple, Banana, Kiwi";
//let fruta = frutas.charCodeAt( frutas.slice(7,13));
/*
let fruta = frutas.substring(7,13);
let codigo = frutas.charCodeAt(fruta);

alert(`Codigo da fruta é: ${codigo}`);*/

function calcularDobro( velho, puto){

    let ano = 0;
    while( velho < 2*puto){
        velho++;
        ano++;
    }
    return ano;
}

let doVelho = 20;
let doPuto = 11;
let falta = calcularDobro(doVelho, doPuto);

alert(`${falta}`)