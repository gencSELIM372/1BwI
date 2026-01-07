function main() {
    let a = parseInt(prompt("Gib mir die Nummer 1: ")) 
    let b = parseInt(prompt("Gib mir die Nummer 2: "))
    let sum = 0

    for (let i = a + 1; i < b; i++) {
        sum += i
    }

    console.log(sum)
}                                           

main()

// += bedeutet sum = sum + i