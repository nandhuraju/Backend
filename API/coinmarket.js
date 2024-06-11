

async function AsyFn()
{ let x=await fetch("")
    y=await x.json()
    
    console.log(y)

   
    
}
AsyFn()