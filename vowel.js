function vawel(params) {
    let text = params[0]
    console.log(text[1])
    for (let index = 0; index < text.length; index++) {
        const letter = text[index]
        console.log(letter)
        if (letter === "a") {
            sum = sum + 1
        }
        else if (letter === "e") {
            sum = sum + 2
        }
        else if (letter === "i") {
            sum = sum + 3
        }
        else if (letter === "o") {
            sum = sum + 4
        }
        else if (letter === "u") {
            sum = sum + 5
        }
    }
    console.log(sum)
}
vowel(["forever")