function food(params) {
    let chicken = Number(params[0])
    let fish = Number(params[1])
    let vegan = Number(params[2])
    let chikenPrice = 10.35
    let fishPrice = 12.40
    let veganPrice = 8.15
    let money = chicken * chikenPrice + fish * fishPrice + vegan * veganPrice
    let desertPrice = money * 0.20
    money = money + desertPrice
    let deliveryPrice = 2.50
    money = money + deliveryPrice
    console.log(money)
}

food(["2 ", "4 ", "3"])