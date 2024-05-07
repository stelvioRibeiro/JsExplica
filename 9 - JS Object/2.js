const person = {
    firstName: "Stélvio",
    lastName:"Ribeiro",
    age:18,
    eyeColor:"blue"
  //  fullName: function(){ return this.firstName+ }
};

//document.getElementById("demo").innerHTML = this.firstName + "  " + this.lastName + " ";

/*let firstName = " ", lastName = " ";

function fullName( firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    return this.firstName + " " + this.lastName;
}

document.getElementById("demo").innerHTML = fullName("Stelvio" , "Ribeiro");

console.log(fullName("Stelvio" , "Ribeiro"));*/

let idadePai = Number(prompt("Digite a idade do pai"));
let idadeFilho = Number(prompt("Digite a idade do filho"));

let doubro = idadeFilho * 2;

let anoPassou = idadePai - doubro;

alert(` Ja passou ${anoPassou}  do dobro da idade do seu filho`)