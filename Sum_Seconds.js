function sumSecond(input){
    let x1 = Number(input[0])
    let x2 = Number(input[1])
    let x3 = Number(input[2])

    let sumsecond = x1 + x2 + x3;
    let min = Math.floor(sumSecond / 60)
    let secounds = sumSecond % 60
  
    if (secounds < 10){
        console.log(`${min}:0${secounds}`)
    }



    }

sumSecond(["35","45","44"])


