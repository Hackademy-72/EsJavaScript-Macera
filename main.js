//Esercio 01

let Ep1 = 1;
let Ep2 = 1;
let Ep3 = 1;
let Ep4 = 1;
let Ep5 = 1;
let somma = Ep1+Ep2+Ep3+Ep4+Ep5;
let media = somma/5;
console.log(somma);
console.log(typeof somma);
console.log(`la somma dei numeri è ${somma}, e la media è ${media}`);

//Esercizio 02

let nascita = 1998;
let anno = 2023;
let età = anno - nascita;
let annimancanti = 100 - età;
console.log(`Hai ${età} anni e ti mancano ${annimancanti} anni per compierne 100`);

//Esercizio 03

let gatti = 44;
let gattiinfila = 6;
let differenza = Math.floor(gatti / gattiinfila);
console.log(`ci sono 6 file di ${differenza} gatti`);
let gattitotali = gattiinfila * differenza;
let gattimancanti = gatti - gattitotali;
console.log(`ne mancano ${gattimancanti} gatti`);

//Esercizio 04

let a = 10;
let b = -2;
let c = 31; 
let d = 22;
let e = 15;
let f = -6;
let g = 7;
let tempMax = Math.max(a, b, c, d, e, f, g);
let tempMin = Math.min(a, b, c, d, e, f, g);
console.log(`la temperatura più calda ${tempMax}, quella più fredda è ${tempMin}`);
