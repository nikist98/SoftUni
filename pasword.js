function password(params) {
    let str = params[0]
    let password = "s3cr3t!P@ssw0rd"
    if (str === password) {
        console.log("Welcome")
    } else {
        console.log("Wrong password!")

    }
}
password(["s3cr3t!P@ssw0rd"])