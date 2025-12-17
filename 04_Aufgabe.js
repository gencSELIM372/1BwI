
let age = parseInt(prompt("gib hier dein alter ein"));

if (age < 0)
    console.log("ungültiges Alter");
else if (age < 12) {
    console.log("Du bist ein Kind");
    }
else if (age < 30) {
    console.log("du bist erwachsen");
}else if (age < 50){
    console.log("du bist mitelalt")
}else {
    console.log("du bist ein senior")
}