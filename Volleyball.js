function volley(input) {
    let type = input[0]
    let hollydays = Number (input[1])
    let weekends = Number (input[2])
    let count = (48 - weekends) * 3/4 + weekends + hollydays * 2/3
    if (type === 'leap') {
       count = count + count * 15/100 
    } else {
        
    }
    console.log(Math.floor(count))

}
volley(["leap", "5","2"])