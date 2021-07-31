function fish(input){
    let length = Number(input[0]) /10
    let width = Number(input[1])  /10
    let heigth = Number(input[2]) /10
    let procent = Number(input[3]) 
    let volume = length * width * heigth
    let water = volume - volume * procent / 100      
    console.log(water)

}
fish(['85','75','47','17'])