function calculate(params) {
    let deposit = Number(params[0])
    let period = Number(params[1])
    let procendage = Number(params[2]) / 100
    let sum = deposit + period * ((deposit * procendage) / 12)
    console.log(sum)

}
calculate(["200 ", "3 ", "5.7 "])