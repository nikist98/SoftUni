function cinema(params) {
    let type = params[0]
    let r = Number(params[1])
    let c = Number(params[2])
    let ticketPrice = 0
    let arena = r * c
    let profit = 0
    if (type === "Premiere") {
        ticketPrice = 12.00
    } else if (type === "Normal") {
        ticketPrice = 7.50
    } else if (type === "Discount") {
        ticketPrice = 5.00
    }
    profit = ticketPrice * arena
    console.log(profit.toFixed(2) + ' leva')

}






cinema(["Normal", "21", "13"])