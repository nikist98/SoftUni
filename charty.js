function charity(input) {
    let days = Number(input[0])
    let bakers = Number(input[1])
    let cakes = Number(input[2])
    let wafles = Number(input[3])
    let pancakes = Number(input[4])
    let price_cakes = 45
    let price_wafles = 5.80
    let price_pancakes = 3.20
    let sum = days * bakers *(price_cakes * cakes + price_wafles * wafles + price_pancakes * pancakes)
    sum = sum - sum * (1/8)
        console.log(sum)
}
charity(['23','8','14','30','16'])