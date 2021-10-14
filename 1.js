// // declare variables
// let a;

// // printing to console
// console.log('datatype of a is',typeof(a));
// console.log('value of a is',a);



// a=10;
// console.log('datatype of a is',typeof(a));
// console.log('value of a is',a);


// a='prasanna';
// console.log('datatype of a is',typeof(a));
// console.log('value of a is',(a));


// a=true;
// console.log('datatype of a is',typeof(a));
// console.log('value of a is',a);

// // TEMPLATE LITERALS
// let x=10;
// let y=20;
// let z=30;

// console.log(`a is ${x} and b is ${y} and c is ${z}`)

// console.log("-----------------");
// //declare a function 
// // To find sum Of two numbers
// function sumOfTwoNumb(a,b){
//     let sum = a+b;
//     console.log(`sum of ${a} and ${b} is ${sum}`);
// }
// // To find difference Of two numbers
// function diffOfTwoNumb(a,b){
//     let diff = a-b;
//     console.log(`differencs of ${a} and ${b} is ${diff}`);
// }
// // To find multiplication Of two numbers
// function MulipleOfTwoNum(a,b){
//     let multiply = a*b;
//     console.log(`Multiplication of ${a} and ${b} is ${multiply}`);
// }
// // To find division Of two numbers
// function DivideOfTwoNumb(a,b){
//     let divide = a/b;
//     console.log(`divide of ${a} and ${b} is ${divide}`);
// }
// // To find modulo Of two numbers
// function ModuloOfTwoNumb(a,b){
//     let modulo = a%b;
//     console.log(`modulo of ${a} and ${b} is ${modulo}`);
// }
// // To find exponential Of two numbers
// function expoOfTwoNumb(a,b){
//     let expo = a**b;
//     console.log(`expontential of ${a} and ${b} is ${expo}`);
//     return 0;
// }


// sumOfTwoNumb(10,20);
// diffOfTwoNumb(200,100);
// MulipleOfTwoNum(7,7);
// diffOfTwoNumb(100,10);
// ModuloOfTwoNumb(10,3);
// expoOfTwoNumb(2,10);

// // TO find even or odd
// function evenOrOdd(x)
// {
//     if(x%2 == 0)
//     {
//         return(`even`)
//     }
//     else if(x%2 != 0){
//         return('odd')
//     }
//     else{
//         return("none odd none even")
//     }
// }
// console.log(evenOrOdd(10));



// // big in three numbers
// function bigOfThreeNumbers(a,b,c)
// {
//   if(a>b && a>c)
//   {
//       console.log("a is big");
//   }
//   else if(b>c)
//   {
//       console.log("b is big");
//   }
//   else{
//       console.log("c is big");
//   }
// }

// bigOfThreeNumbers(100,200,300);


// to find factors of a number
// function findFactor(n){
//     for(let i=1;i<=n;i=i+1)
//     {
//         if(n%i==0)
//         {
//             console.log(i);
//         }
//     }
// }

// findFactor(10);

// find factors using while
function findFactors(x){
    let denominator =1;
    while(denominator<=n){
        if(n%denominator==0){
            console.log(denominator);
        }
        denominator=denominator+1;
    }
}

findFactors(10);