let p=new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve(10);
    },3*1000
)
});

p.then