let promise= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Promise resolved")
    },10000
)
});

async function asfn(){
    let result=await promise
    console.log(result);
    console.log("hello");
}

asfn();