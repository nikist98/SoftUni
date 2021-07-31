function shopi(input) {
    let price = Number(input[0])
    let puzles = Number(input[1])
    let dolls = Number(input[2])
    let bears = Number(input[3])
    let minions = Number(input[4])
    let trucks = Number(input[5])
    let prise_puzle = 2.60
    let prise_doll = 3
    let prise_bear = 4.10
    let prise_minion = 8.20
    let prise_truck = 2
    let sum = puzles * prise_puzle + dolls * prise_doll + minions * prise_minion + trucks * prise_truck + bears * prise_bear
    let toys = puzles + dolls + dolls + minions + trucks
    if (toys > 50) {
        sum = sum - sum * 0.25
    }
    sum = sum - sum * 0.10
    if (sum >= price) {
        console.log(`Yes! ${(sum - price).toFixed(2)} lv left`)
    } else {
        console.log(`Not enough money! ${price - sum} lv needed`)
    }
}
shopi(["40.8","20", "25",
    "30", "50", "10"])