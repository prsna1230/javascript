//----------Es6 Advanced Array Methods-----------

//demo for filter method:
let arr =[-30,-99,-101,-1,10,20,30,40,50,60,70,300,500,101];

// get elements greater than 30;
let resultArray1 = arr.filter(function(val){
    return val>30;
})
console.log("new array is ",resultArray1);

// get elements greater than 30 using arrow function
let resArray = arr.filter(x => x>30);
console.log("new array is ",resArray);

// find negative numbers
let negativeElemArray = arr.filter(function(v){
    return v<0;
})
console.log("The negative values of an array is ",negativeElemArray);

// elements below 100
let belowHundred = arr.filter(function(v){
    return v<100;
})
console.log("Values below Hundred: ",belowHundred);


// demo of map method
let arr1 = [10,20,30,40,50,60,70];
console.log(arr1);
let newArray = arr1.map(v=>v+10);
console.log(newArray);
console.log(arr1);
let newArray2 = arr1.map(v=>v/10);
console.log(newArray2);

// for each loop
// let array1 = [1,2,3,4,5,6,7,8];
// array1.forEach((v1,index)=>{
// })

// reduce method
let prasanna =[10,20,30];
let result = prasanna.reduce((sum,v)=>{
    return sum+v;
})
console.log(result);
