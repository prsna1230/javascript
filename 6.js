let arr=[1,2,3,4,5,6];

// Add elements to end
let sam = arr.push(70,80,90);//push method return length of new array
console.log(arr);
console.log(sam);

// Add elements to beginining
let ram = arr.unshift(-3,-2,-1,0);//unshift method return length of new array
console.log(arr);
console.log(ram);

// Add elements inbetween
let mam = arr.splice(10,0,100,101,102,103,104,105,106,107,108);
console.log(arr);

// filter method
let filterMet = arr.filter(function(val){
    return val>100 && val<200;
})
console.log(filterMet);
// another way
let filterMet1 = arr.filter(v => (v>100 && v<200));
console.log(filterMet1);

// Find prime number of using foreach
// console.log("The Prime numbers are:")
// let array = [1,2,3,4,5,6,7];
// array.forEach(function(val){
//     let isPrime = true;
//     for(let i=2;i<val;i++){
//         if(val%i == 0){
//             isPrime = false;
//         }
//     }
//     if(isPrime){
//         console.log(val);
//     }
// })


// prime
console.log("Prime numbers")
let primeArray =[-1,-2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
primeArray.forEach(function(v){
    let count=1;
    for(let k=2;k<=v;k++){
        if(v%k == 0){
            count--;
        }
    }
    if(count==0){
        console.log(`${v} `);
        count=0;
    }
    // else{
    //     console.log(v,'It is not a prime');
    // }

})
