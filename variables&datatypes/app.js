//3.1 Aratus
/*
let MituKorda = prompt("Mitu korda aratus heliseb? ")
let kord = 1
while(kord <= MituKorda){
    console.log(`Touse ja Sara - ${kord}. kord`)
    kord++
}
*/
//3.2 Janesevanemate mure
let ring = 1
let RingideArv =Number(prompt('Sisesta ringide arv: '))
let porgandidKokku = 0

while(ring <= RingideArv){
    console.log(`${ring}. ring`)
    if (ring % 2 == 0){
        //console.log(`Saab ${ring} porgandit`)
        porgandidKokku += ring
        //console.log(`Kokku saanud ${porgandidKokku} porgandit`)
    }
    ring ++
}
console.log((`Kokku sai ${porgandidKokku} porgandit`))