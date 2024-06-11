async function AsyFn()
{ let x=await fetch("https://api.openweathermap.org/data/2.5/weather?lat=8.4833&lon=76.9167&appid=75d0828f051c872f9473db8958213ffa")
    y=await x.json()
    // console.log(y)

    console.log("The temperature of tvm is : "+y.main.temp)
    // catch error
    // await(response=>response.json())
    // (json=>console.log(json))
 
}
AsyFn()