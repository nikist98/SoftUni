function outfit(params) {
    let degrees = Number(params[0])
    let partOfDay = params[1]
    let [dress, shoes] = getPartOfDay(partOfDay, degrees)

    console.log(`It's ${degrees} degrees, get your ${dress} and ${shoes}.`)
}

function getPartOfDay(params, degrees) {
    if (params === "Morning") {
        if (10 <= degrees && degrees <= 18) {
            return ["Sweatshirt", "Sneakers"]
        } else if (18 < degrees && degrees <= 24) {
            return ["Shirt", "Moccasins"]
        } else if (degrees >= 25) {
            return ["T-Shirt", "Sandals"]
        }
    } else if (params === "Afternoon") {
        if (10 <= degrees && degrees <= 18) {
            return ["Shirt", "Moccasins"]
        } else if (18 < degrees && degrees <= 24) {
            return ["T-Shirt", "Sandals"]
        } else if (degrees >= 25) {
            return ["Swim Suit", "Barefoot"]
        }
    } else if (params === "Evening") {
        if (10 <= degrees && degrees <= 18) {
            return ["Shirt", "Moccasins"]
        } else if (18 < degrees && degrees <= 24) {
            return ["Shirt", "Moccasins"]
        } else if (degrees >= 25) {
            return ["Shirt", "Moccasins"]
        }
    }



    return ['Кожух', 'Галоши']
}




outfit(["16", "Morning1"])