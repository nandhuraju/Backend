let promise = new Promise(function (resolve, reject) {
    let x = 5
    let y = 6
    z = x + y
    if (z >= 15) {
        resolve()
    } else {
        reject()
    }

})

promise.then(function () { console.log("no. greater than 15") }
).
    catch(function () {
        console.log("no. less than 15")
    }
    ).finally(function () {
        console.log("This process is completed")
    })
