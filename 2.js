// switch case demo
function switchDemo(choice){
    switch(choice){
        case 1: console.log("case-1");
                break;
        case 2: console.log("case-2");
                break;
        default: console.log("default");
    }
}
switchDemo(1);

// switch demo 2
function arithmeticOperation(a,b,operator){
    switch(operator){
        case "+": console.log(`The addion of ${a} and ${b} is ${a+b}`);
                    break; 
        case "-": console.log(`The Subtraction of ${a} and ${b} is ${a-b}`);
                    break; 
        case "*": console.log(`The Multiplication of ${a} and ${b} is ${a*b}`);
                    break; 
        case "/": console.log(`The division of ${a} and ${b} is ${a/b}`);
                    break; 
        case "%": console.log(`The modulo of ${a} and ${b} is ${a%b}`);
                    break;
        default : console.log("No such operator are three..!Please give +, -, *, / or % operator");
    }
}

arithmeticOperation(10,20,"+");
arithmeticOperation(200,100,"-");
arithmeticOperation(20,30,"*");
arithmeticOperation(1000,20,"/");
arithmeticOperation(20,3,"%");
arithmeticOperation(20,3,"&");
console.log("--");

// array
let numberArray =[100,200,300,400,500,600,700];
console.log(numberArray);
console.log(numberArray.length);
console.log(typeof(numberArray))

for(let i=0;i<numberArray.length;i++){
    console.log(numberArray[i]);
}
console.log("Using While loop")
let x=0;
while(x<numberArray.length){
    console.log(numberArray[x]);
    x++;
}



// print multiples of 3 in array
console.log("--");
console.log("Printing the multiples of 3 in an Array");
let arr1 = [10,20,30,40,50,60];
for(let i=0;i<arr1.length;i++){
    if(arr1[i]%3===0){
        console.log(`${arr1[i]} is multiple of 3`);
    }
}
console.log("--");



// print even and odd numbers 
console.log("Printing Odd and Even numbers");
let arr2 =[21,25,22,98,71,45];
for(let i=0;i<arr2.length;i++){
    if(arr2[i]%2==0){
        console.log(`${arr2[i]} is even`);
    }
    else{
        console.log(`${arr2[i]} is odd`);
    }
}
console.log("--------------");



//-----------------------------------------assignments--------------------------------------------
//Find sum of even numbers
function sumOfEvenNumbers(arr3){
    let sum=0;
    for(let i=0;i<arr3.length;i++){
        if(arr3[i]%2==0){
            sum = sum+arr3[i];
        }
    }
    console.log(`The sum of even numbers: ${sum}`);
}
sumOfEvenNumbers([1,2,3,4,5,6]);
console.log("------");









// find factors of array;
function factorsofArray(arr4){
    for(let i=0;i<arr4.length;i++){
        let str="";
        for(let j=1;j<arr4[i];j++){
            if(arr4[i]%j==0){
                // console.log(`Factors of ${arr4[i]} are ${j}`);
                str = str+" "+j;
            }
        }
    console.log(`Factors of ${arr4[i]} are ${str}`);
    }
}
factorsofArray([10,20,30,40]);
console.log("------");









// find big and small elements of an array
function bigNumSmallNum(numbers){
    let biggest =numbers[0];
    let smallest =numbers[0];
    for(let i=0; i<numbers.length;i++){
        if(numbers[i]>biggest){
            biggest=numbers[i];
        }
        if(numbers[i]<smallest){
            smallest=numbers[i];
        }
    }
    console.log(`The biggest number of the array: ${biggest}`);
    console.log(`The biggest number of the array: ${smallest}`);
}
bigNumSmallNum([100,50,1000,200,45,2345]);
console.log("-----------");










// checking Prime
function checkPrime(num){
    for(let i=2; i<num; i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

let result = checkPrime(11);

if(result == true){
    console.log("The given number is Prime Number");
}
else{
    console.log("The given number is Not a prime Number");
}
console.log("-----------");









//To print Prime numbers of an array
function arrayPrimeCheck(){
    let numbers =[10,11,12,13,14,15,16,17];
    console.log("The Prime numbers are: ");
    for(let i=0;i<numbers.length;i++){
        let isPrime = true;
        for(let j=2;j<numbers[i];j++)
        {
            if(numbers[i]%j == 0){
                isPrime=false
            }
        }
        if(isPrime){
            console.log(numbers[i]);
        }
    }
}

arrayPrimeCheck();


//Assignment-6
let Product={
    productNo : 10001,
    productName :"Headset",
    productMfgDate :"12 April 2020",
    productMfgPlace :"Bangalore",
}

console.log(Product);
Product.mfgCompany ="HP";
console.log(Product);
Product.productName ="Laptop";
console.log(Product);
