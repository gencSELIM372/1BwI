
let seletion = parseInt(prompt("Was für ein Getränk möchtest du: 1 Cola 2 Bier 3 Wasser 4 Tee"));

let drink

if (seletion == 1){
    drink = "Cola"

} else if (seletion == 2){
    drink = "Bier"

} else if (seletion == 3){ 
    drink = "Wasser"

}  else if (seletion == 4){ 
    drink = "Tee"
}   

console.log("Danke für deine Bestellung von " + drink);

