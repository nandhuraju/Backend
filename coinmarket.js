//3ff420c8-31a5-441d-8be6-18b67598b08e

async function AsyFn()
{ let x=await fetch("")
    y=await x.json()
    
    console.log(y)

    // console.log("The temperature of tvm is : "+y.main.temp)
    
    // await(response=>response.json())
    // (json=>console.log(json))
 
}
AsyFn()