// Simulazione di pari/dispari tra due pc
// Ogni pc ha un numero scelto casualmente
//  Sommiamo i due numeri e dichiariamo chi ha vinto.

// variabili che impersonificano i giocatori
var pcrosso;
var pcblu;

console.log("PC Rosso gioca sempre pari");
console.log("PC Blu gioca sempre dispari");

// funzione per decidere che numero avrà pcrosso
function numrosso(pcrosso){
  return pcrosso = Math.floor(Math.random() *5) +1;
}

// funzione per decidere che numero avrà pcblu
function numblu(pcblu){
  return pcblu = Math.floor(Math.random() *5) +1;
}

var numerosso = numrosso(pcrosso);
var numeroblu = numblu(pcblu);

console.log("il numero di PC Rosso è: " +  numerosso);
console.log("il numero di PC Blu è: " + numeroblu);

// somma dei numeri scelti da pcrosso e pcblu
var numviola = numerosso + numeroblu;
console.log("la somma dei numeri di PC Rosso e PC Blu è: " + numviola);

// controllo se numviola è pari o dispari
if (numviola % 2 === 0){
  // dichiarazione del vincitore (pcrosso)
  console.log("PC Rosso vince!");
}else {
  // dichiarazione del vincitore (pcblu)
  console.log("PC Blu vince!");
}
