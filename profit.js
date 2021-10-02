function profit(params) {
    let comapny = params[0]
    let ticketsadult = Number(params[1])
    let ticketschild = Number(params[2])
    let price = Number(params[3])
    let tax = Number(params[4])
    let money = ticketsadult * (price + tax)
    money = money + ticketschild * (price * 0.30 + tax)
    let profit = money * 0.20
    console.log(`The profit of your agency from ${comapny} tickets is ${profit.toFixed(2)} lv.`)


}
profit(['WizzAir', '15', '5', '120', '40'])