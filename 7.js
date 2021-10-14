let test ={
    a:10,
    b:20
}

let testArr = [1,2,3];

//copy of test
let copyObj = test;
let copyObj1 = Object.assign({},test);
let copyArr =Object.assign([],testArr); 

// check copy
copyObj.c=30;
copyObj1.c=300;
copyArr.push(10);
console.log("text: ",test);
console.log("copyObj: ",copyObj);
console.log("text: ",test);
console.log("copyObj1: ",copyObj1);

console.log("textArr: ",testArr);
console.log("copyArr: ",copyArr);


console.log("------------------")
// Primitives are imutable

let a =100;
console.log("a is :",a);
a+100;
//If a do this the value 200 was stored anywhere 
//in Ram, and 'a' doesn't have any link with the value 200
console.log("a is :",a);
a=a+100;
//This is not mutablitiy because it was reassigning
console.log("a is :",a);
// demo with string:
let firstName='Prasanna';
console.log("First name is:",firstName);
firstName+"kumar";
console.log("Full name is:",firstName);//No Changee..!!

// Want to change means
firstName = firstName+" kumar";
console.log("Full name is:",firstName);//Changee happens..!!



console.log("------------------")
// ternary operator
console.log("Ternary Operator demo")
let a1=100;
let b1=200;
a1>b1 ? console.log("a is big"):console.log("b is big");


console.log(prasanna);
var prasanna=10;