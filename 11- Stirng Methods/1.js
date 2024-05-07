

let text = "I love cats. Cats are very easy to love. Cats are very popular."
/*text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");*/

 let text1 = text.replaceAll(/Cats/gi , "dogs");
 // text1 = text.replaceAll("Cats" , "Dogs")

 document.getElementById("demo1").innerHTML = " Frase original: " + text;
document.getElementById("demo").innerHTML = "Frase modificada: " + text1;

console.log(typeof(text1));