// Chiedo a utente di inserire come input una parola
// tramite funzione verifico se la parola inserita è palindroma
// dò output a utente dicendogli che ho verificato;

// l'utente inserisce una parola
var parolautente = prompt("Inserisci un palindromo");
console.log("La parola inserita dall'utente è: " + parolautente);

// funzione per scomporre la var parolautente
function scompositore(parolautente){
  return scomposto = parolautente.split("");
}

// funzione per revertare le lettere di scomposto
function revertitore(scomposto){
  return reverso = scomposto.reverse("");
}

// funzione per ricomporre reverso in parola
function ricompositore(reverso){
  return ricomposto = reverso.join("");
}
console.log(scompositore(parolautente));
console.log(revertitore(scomposto));
console.log(ricompositore(reverso));

// controllo se parolautente e ricomposto sono palindromi
if (parolautente == ricomposto){
  // se parolautente è uguale a ricomposto mostro questo messaggio
  alert("hai inserito un palindromo");
}else {
  // se parolautente non è uguale a ricomposto mostro questo messaggio
  alert("non hai inserito un palindromo")
}
