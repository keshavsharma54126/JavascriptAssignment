let prime=[];

for(let i = 1; i <10001;i++){
    flag=true;
    for(let j = 2; j <i;j++){
        if(i%j==0){
            flag=false;
        }
    }
    if(flag==true){
        prime.push(i);
    }
}
console.log(prime);