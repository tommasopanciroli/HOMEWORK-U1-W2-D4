/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  console.log("L'area del quadrato è " + l1 * l2)
}
area(5, 8)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

//let sum = 0

//const crazySum = function (n1, n2) {
//sum = n1 + n2
//if (n1 !== n2) {
//return sum
//} else {
// sum = sum * 3
// return sum
//}
//}
//console.log('Il risultato di questa funzione è:', crazySum(10, 10))
//console.log('Il risultato di questa funzione è:', crazySum(10, 20))
/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3
  } else {
    return n1 + n2
  }
}
console.log(crazySum(6, 8))
console.log(crazySum(10, 10))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n) {
  if (n > 19) {
    return Math.abs(n - 19) * 3
  } else {
    return Math.abs(n - 19)
  }
}

console.log(crazyDiff(15, 19))
console.log(crazyDiff(25, 19))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true
  } else {
    return false
  }
}

console.log(boundary(11))
console.log(boundary(46))
console.log(boundary(400))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

// const epify = function (string) {
//   if (string !== 'EPICODE') {
//     return (string = string + ' EPICODE')
//   } else {
//     return (string = string)
//   }
// }

// console.log(epify(' CIAO'))
// console.log(epify(' EPICODE'))

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (string) {
  if (string.startsWith('EPICODE')) {
    return string
  } else {
    return 'EPICODE' + string
  }
}

console.log(epify('EPICODERS'))
console.log(epify('CIAO'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (num) {
  if (num % 3 === 0 || num % 7 === 0) {
    console.log('multiplo di 3 o di 7')
  }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

let str3 = 'Buonasera'

const cutString = function (str3) {
  return str3.slice(1, -1)
}
console.log(cutString(str3))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
