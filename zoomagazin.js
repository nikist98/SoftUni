function demo (input){

    let dogCount = input[0];
    let otherCount = input[1];
    let result = parseFloat(Number (dogCount) * 2.50) + ( Number (otherCount) * 4);
    console.log (result);
}
demo(["5", "4"])