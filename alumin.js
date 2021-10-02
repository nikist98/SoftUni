function alumin(params) {
    let number = Number(params[0])
    let type = params[1]
    let way = params[2]
    if (number < 10) {
        console.log("Invalid order")
        return
    }
    let price = 0
    let discount = 0
    if (type === "90X130") {
        price = 110
        if (number > 30) {
            discount = 0.05
        }
        if (number > 60) {
            discount = 0.08
        }

    } else if (type === "100X150") {
        price = 140
        if (number > 40) {
            discount = 0.06
        }
        if (number > 80) {
            discount = 0.10
        }

    } else if (type === "130X180") {
        price = 190

        if (number > 20) {
            discount = 0.07
        }
        if (number > 50) {
            discount = 0.12
        }

    } else if (type === "200X300") {
        price = 250

        if (number > 25) {
            discount = 0.09
        }
        if (number > 50) {
            discount = 0.14
        }

    }
    let money = number * price
  
    money = money - money * discount

    if (way === "With delivery") {
        money = money  + 60 

    }
    if (number > 99) {
        money = money - money * 0.04
       
    }
    console.log(`${money.toFixed(2)} BGN`)
}
alumin(["105", "100X150", "With delivery"])