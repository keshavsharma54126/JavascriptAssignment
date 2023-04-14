let countries=['India','Pakistan','Bangladesh','Srilanka','USA','Germany'];

if(countries.includes('Ethiopia')){
    console.log("Ethiopie is already included");
    console.log(countries);
}
else{
    countries.push('adding Ethiopia');
    console.log(countries);
}