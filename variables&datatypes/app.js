/*/**
 * documentation
 * comment
 * style
 */
//this is simple comment on 1 row
/*
console.log("Hello, world!")
console.log("Second row")
console.log("third row")

/*
console.log("Hello, world!")
console.log("Hello, world!")
console.log("Hello, world!")
*/
/*
let astmeAlus = 2
let astendaja = 4

let tulemus = Math.pow(astmeAlus,astendaja)

console.log(tulemus)
 */
/* ASTENDAMISE ÜLESANNE
let astmeAlus= Number(prompt('Sisestage astme alus: '))
let astendaja= Number(prompt('Sisestage astme alus: '))

console.log(typeof astmeAlus)
console.log(typeof astendaja)

let tulemus = Math.pow(astmeAlus,astendaja)
console.log(tulemus)
 */
/* TRAHVI ÜLESANNE
let nimi = prompt('Sisestage oma nimi: ')
let lubatudkiirus = prompt('Sisestage lubatud kiirus: ')
let tegelikKiirus = prompt('Sisestage tegelik kiirus: ')

let trahv = (tegelikKiirus - lubatudkiirus)*3
let tegelikTrahv= Math.min(trahv, 190)
console.log(nimi + ', kiiruse ületamise eest on Teie trahv ' + tegelikTrahv + ' eurot.')
 */

let ainepunktid = 7
let nadalad = 16
let tunnid = ainepunktid * 26
let nadalasToimetan = Math.round((tunnid / nadalad))
console.log(nadalasToimetan)