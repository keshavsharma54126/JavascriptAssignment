const ages = [19,22,19,24,25,24];
ages.sort();
console.log(ages);
let median=ages[ages.length/2];
console.log(median);

let sum=0;
for(let i=0; i<ages.length; i++){
     sum=sum+ages[i];
}
let avgAge=sum/ages.length;
console.log(avgAge);
console.log(Math.max(...ages));
console.log(Math.min(...ages));
console.log(Math.max(...ages)-Math.min(...ages));

const maxi=Math.max(...ages);
const mini=Math.min(...ages);

console.log(Math.abs(mini-avgAge));
console.log(Math.abs(maxi-avgAge));

