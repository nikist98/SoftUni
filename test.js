function test(input) {
    let a = Number(input[0])
    let b = Number(input[1])
    let sum = 0
    let numbers =''  
    for (let index = a; index <= b; index += 1) {
        if (index % 9 === 0) {
 
            numbers += index + "\n"
            sum += index 
                
        }


    }

    
    console.log("The sum: " + sum)
    console.log(numbers)
}
test(['100', '200'])