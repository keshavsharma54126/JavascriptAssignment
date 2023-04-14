let prime=7;


function isPrime(prime){
    let flag=false;
    for(var i=2; i<prime;i++){
        if(prime%i==0){
            flag=true;
        }
        
    }
    if(flag==false){
        console.log(`${prime} is  a prime number`);
    }
    else{
        console.log(`${prime} is not a prime number`);
    }
    
}
isPrime(prime);