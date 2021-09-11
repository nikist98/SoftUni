function speed(input) {
    let v = Number(input[0])
    if (v <= 10) {
        console.log("slow")

    } else if (v >10 && v <=50) {


        console.log("average")


    } else if (v >50 && v <=150) {
        console.log("fast")
    } else if (v > 150 && v <=1000) {
        console.log("ultra fast")
    } else ("extremely fast")

}
speed(["50"])