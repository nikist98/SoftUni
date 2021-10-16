function kong(params) {
    let budget = Number(params[0])
    let num = Number(params[1])
    let price = Number(params[2])
    let money = num * price
    let decor = budget * 0.10
    if (num > 150) {
        money = money - 0.10 * money
    }
    money = money + decor
    if (money > budget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(money - budget).toFixed(2)} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - money).toFixed(2)} leva left.`)
    }
}
kong(["20000", "120", "55.5"])