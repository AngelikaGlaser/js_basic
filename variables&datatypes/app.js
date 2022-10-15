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
/* AINEPUNKTIDE ÜLESANNE
let ainepunktid = 7
let nadalad = 16
let tunnid = ainepunktid * 26
let nadalasToimetan = Math.round((tunnid / nadalad))
console.log(nadalasToimetan)
 */
/*
TRANSPORDI ORGANISEERIMINE
let inimesed = 100
let kohtiBussis = 40

let bussidTaidetud = Math.floor(inimesed / kohtiBussis)
let mahaJaanud = inimesed % kohtiBussis

console.log(inimesed + 'inimeste soidutamiseks laheb vaja ' + bussidTaidetud + 'bussi')
if (mahaJaanud != 0) {
    console.log('ja ' + mahaJaanud + 'inimest on jaanud maha')
}
*/
/*
Jaatumise ulesanne
let temp = Number(prompt('Sisesta ohutemperatuur:'))
if (temp > 4.0){
    console.log('Ei ole jaatumise ohtu')
} else {
    console.log('On jaatumise oht')
}
*/
/*
Pulss
let sugu = prompt('Sisesta oma Sugu: ')
let vanus = Number(prompt('Sisesta oma vanus: '))
let treeninguTuup = Number(prompt("Sisesta treeningutuup: "))
let pulsisagedus;

// loogilised operaatorid && - and, || - or , ! - not
if (sugu == 'M' || sugu == 'm' ) {
    pulsisagedus = 220 - vanus
}  else if (sugu == 'n'||sugu == 'N'){
    pulsisagedus = 206 - 0.88 * vanus
}

let minPulsisagedus
let maxPulsisagedus
if (treeninguTuup == 1 ){
    minPulsisagedus = 0.5 * pulsisagedus
    maxPulsisagedus = 1.7 * pulsisagedus
} else if (treeninguTuup == 2){
    minPulsisagedus = 0.7 * pulsisagedus
    maxPulsisagedus = 0.8 * pulsisagedus
} else if (treeninguTuup == 3){
    minPulsisagedus = 0.8 * pulsisagedus
    maxPulsisagedus = 0.87 * pulsisagedus
}
console.log(`Pulsisagedus peab olema vahemikus ${Math.round(minPulsisagedus)} kuni ${Math.round(maxPulsisagedus)}`)
 */
2.4 ISTEKOHT
let valik = prompt('kas soovid istekohta valida ise "ise" voi loosida "loos"')
let koht

if (valik == "ise"){
    let kohavalik = prompt('Kas soovite istuda akna aares "aken" voi mujal "muu"')
    console.log('Valisite ise.')
    if (kohavalik == 'aken') {
        koht = 'aknakoht'
    } else if (kohavalik == 'muu'){
        koht = 'vahekaigukoht'}
} else if (valik == 'loos'){
    console.log('Istekoht loositi.')
    let juhuarv = Math.ceil(Math.random() * 3)
    if (juhuarv == 1) {
        koht = "Aknakoht"
    } else {
        koht = "Vahekaigukoht"
    }
}
console.log(koht)