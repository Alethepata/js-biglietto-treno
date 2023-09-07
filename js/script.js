/*
1. Salvare in 2 variabili il prompt dell'inserimento dei km e dell'età.
2. Moltiplicare i km per 0,21. 
3. Creare 2 IF: -sconto minorenni(-20%) -sconto over 65(-40%).
4. Creare la stringa di output.
5. Effettuare l'innerHTML dell'output nel tag designato.
*/ 

const outputTag = document.getElementById('output');

const km = parseInt(prompt('Inserire Km'));
const age = parseInt(prompt('Inserire età'));
const costoKm = km * 0.21;
const scontoMinorenni = (costoKm * 20) / 100;
const scontoOver = (costoKm * 40) / 100;
let message



outputTag.innerHTML = message;