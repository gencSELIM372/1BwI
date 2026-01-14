//Aufgabe 1 – Zahlenanalyse (Loop + Modulo + if)
//Schreibe ein Programm, das die Zahlen von 1 bis 100 durchläuft.

//Gib für jede Zahl aus:

//"Fizz" wenn sie durch 3 teilbar ist

//"Buzz" wenn sie durch 5 teilbar ist

//"FizzBuzz" wenn sie durch 3 und 5 teilbar ist

//sonst die Zahl selbst

//Verwende for-Loop, Modulo (%) und if / else if / else.


for(let i = 1; i <= 100; i++){
    
    if( i % 3 === 0 && i % 5 == 0){
        console.log("FizzBuzz");
        
    }else if( i % 3 === 0){
        console.log("Fizz");

    }else if( i % 5 === 0){
        console.log("Buzz");

    } else {
        console.log(i)
    }
}




