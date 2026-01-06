let note = parseInt(prompt("Gib deine Note ein"));

let anwesenheit = parseInt(prompt("Gib deine Anwesenheit ein"));

let zusaetzlichePunkte = parseInt(prompt("Gib deine zusätzlichen Punkte ein"));


if (note >= 80 && (anwesenheit >= 90 || zusaetzlichePunkte >= 5)) {
    console.log("Bestanden");
    
} else {
    console.log("Nicht bestanden");
}