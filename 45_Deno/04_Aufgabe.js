
let age = parseInt(prompt("gib hier dein alter ein"));

if (age < 0)
    console.log("ungültiges Alter");
else if (age < 12) {
    console.log("Du bist ein Kind");
    }
else if (age < 30) {
    console.log("du bist Erwachsen");
}else if (age < 5){
    console.log("du bist Teenager");
}else {
    console.log("du bist ein Senior")
}