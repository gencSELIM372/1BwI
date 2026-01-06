
let age = parseInt(prompt("Gib dein Alter ein"));


let money = parseInt(prompt("Gib dein Geld hier ein"));


if (age >= 18 && money >= 12) {
    console.log("Du darfst rein");

} else if (age >= 18 && money < 12) {
    console.log("Du hast nicht genug Geld");

} else {
    console.log("Du bist viel zu Jung");
}
