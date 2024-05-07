
let idadeDoPai = Number(prompt("Digite a idade do velho:"));
let idadeDoFilho = Number(prompt("Digite a idade do filho:"));
let anosFalta, anoPassous;

function calcular(pai , filho){

    let anos = 0;

    while( pai < 2*filho){
        pai++;
        anos++;
    }
    return anos;

}

 anosFalta = calcular(idadeDoPai, idadeDoFilho);

 if( idadeDoFilho >= idadeDoPai){

    alert(`Erro...`);
 }else if( idadeDoPai > 2* idadeDoFilho){

     anoPassous = idadeDoPai - (2*idadeDoFilho);
    alert(` Ja passou ${anoPassous}  do dobro da idade do seu filho`);
}else if(idadeDoPai === 2*idadeDoFilho){
     alert("O dobro da idade do filho coincide com a idade do pai");
}else{
    alert(`Faltam ${anosFalta} anos para o pai ter o dobro  da idade do filho`);
}
console.log(" a idade "+idadeDoPai);