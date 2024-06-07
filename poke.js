async function AsyFn()
{ let x=await fetch("https://pokeapi.co/api/v2/pokemon/5")
    y=await x.json()
   
//    console.log(y)
    console.log("The name of pokemon with ID 5 is :"+ y.species.name)

 
}
AsyFn()