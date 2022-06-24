// Iteration 1: Names and Input

const hacker1 = "Niobe";
console.log(`The driver's name is ${hacker1}.`)

const hacker2 = "Isis";
console.log(`The navigator's name is ${hacker2}.`)
//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
    
    else if (hacker2.length > hacker1.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
      }
      
      else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
          }
    

// Iteration 3: Loops
//print driver's name in capitals
let nombre = "";
 
for (let i=0; hacker1.length > i; i++) {
     nombre += " " + hacker1[i].toUpperCase();
    
     }

     console.log(nombre);


// print navigator's name backwards

let nombre2 = "";
 
     for (let i=(hacker2.length-1); i > -1 ; i--) {
         nombre2 += hacker2[i];
    
     }

    console.log(nombre2);

// lexicographic order:

if (hacker1 == hacker2) {
    console.log("What? You both have the same name?")
}

    else if (hacker2.startsWith(hacker1)) {
        console.log("The driver's name goes first.");
    }

    else if (hacker1.startsWith(hacker2)) {
    console.log("Yo, the navigator goes first definitely.");
    }

    else {
        for (let i = 0; i < (hacker1.length -1 ); i++ ) {
                if (hacker1[i].localeCompare(hacker2[i]) == -1) {
                    console.log("The driver's name goes first.");
                    break;
                 }
                 else if (hacker1[i].localeCompare(hacker2[i]) == 1) {
                     console.log("Yo, the navigator goes first definitely.");
                     break; 
                 }
                 
        }

    }

    //lorem ipsum:

    const lorem = `Lorem et ipsum et dolor et, sit ,et amet consectetur adipisicing elit. Quod, necessitatibus voluptate consequuntur deleniti ullam aliquam iure blanditiis non, dolor dolores odio accusamus voluptatibus! Perspiciatis pariatur id sint, quo excepturi maxime.
    Excepturi perferendis nobis asperiores cumque eveniet ex repellat eum ipsum ad, iste deserunt neque suscipit temporibus debitis nam. Id perferendis, blanditiis quo cumque modi esse deserunt. Sint consequuntur quae quos!
    Rem iusto neque, sapiente modi deserunt nesciunt vitae corporis quasi sunt facere non excepturi magnam facilis atque doloribus totam architecto illo? Facilis debitis veniam quasi dicta aut nostrum impedit fuga et.`

    //contar palabras (he añadido 5 et a mano porque no salía ninguno, aunque nunca va a aparecer al final de una oración lo he puesto por si acaso):

    let word = " et ",
        word2 = " et,",
        word3 = " et.";

    console.log((lorem.split(word).length -1) + (lorem.split(word2).length -1) + (lorem.split(word3).length -1));

//si hay que hacerlo con loops me parece horroso y no encuentro una forma de reducirlo, si es con un if también será largo:

let count = 0,
    pos = lorem.indexOf(word),
    pos2 = lorem.indexOf(word2),
    pos3 = lorem.indexOf(word3);

while (pos > -1) {
++count;
pos = lorem.indexOf(word, pos += word.length);
}

while (pos2 > -1) {
++count;
pos2 = lorem.indexOf(word2, pos2 += word2.length);
}

while (pos3 > -1) {
++count;
pos3 = lorem.indexOf(word3, pos3 += word3.length);
}

console.log(count)


  

//palindromo

let phraseToCheck = "No 'x' in Nixon.";

let newString = "";
let oldString = "";

for (let i=(phraseToCheck.length-1); i > -1 ; i--) {
  
  if (phraseToCheck[i] === "?" || phraseToCheck[i] === "!" || phraseToCheck[i] === "'" || phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === ".")  {
    continue;
  }
  newString += phraseToCheck[i].toLowerCase();
}

for (let i =0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] === "?" || phraseToCheck[i] === "!" || phraseToCheck[i] === "'" || phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === ".")  {
    continue;
  }
  oldString += phraseToCheck[i].toLowerCase();
}


 if (newString === oldString) {
  console.log("this is a palindrome")
 }
 else {
  console.log("not a palindrome")
 }



