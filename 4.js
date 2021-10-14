let arr = [10,20,30,40];
console.log(arr);
// adding elements at end
let len1 = arr.push(50,60,70);
console.log(arr,len1);
// Adding elements at beining
let new1 = arr.unshift(7,8,9);
console.log(new1);
console.log(arr);
// Replacing elements
arr.splice(0,3,100,200,300);
console.log(arr);
arr.splice(3,4,400,500,600,700);
console.log(arr);
// deleting multiple elements 
arr.splice(7,3);
console.log(arr);
// deleting last element
arr.pop();
console.log(arr);
// demo of for-of loop
console.log("demo of for-of loop");
for(let x of arr){
    console.log(x);
}
// demo of for-in loop;
console.log("demo of for-of loop");
let employee={
    eNo:936656,
    eName:'Prasanna',
    eCompany:'Cognizant',
    eDoj:"24th April"
}
for(let e in employee){
    console.log(e);
    console.log(employee[e]);
}
console.log(employee['eName']);

console.log("----------");




// Properties and method of object
let emp ={
    empName:'Prasanna',
    empID:101,
    empCity:'Madurai',
    empAddress:[
        {
            tempAddr:{
                plotNo:101,
                city:'Chennai'
            }
        },
        {
            permAddr:{
                plotNo:111,
                city:'Hyderabad'
            }

        }],
    empSkills:[
        {
            basicLevel:{
                webTech:'HTML',
                backEnd:'c#'
            }
        }
    ],
    empBasic:20000,
    getSalary:function(hraPercent,daPrecent){
        let hra = (hraPercent/100)*this.empBasic;
        let da = (daPrecent/100)*this.empBasic;
        return (this.empBasic+hra+da);
    }
}
console.log("The employee temporary city: ",emp.empAddress[0].tempAddr.city);
console.log("The employee permanent city: ",emp.empAddress[1].permAddr.city);
console.log("The employee salary is: ",emp.getSalary(10,10));








// function declaration
console.log("-------------");
// function declaration
function productOfTwo(a,b){
    let product1= a*b;
    return product1;
}
console.log("product of two Numbers: ",productOfTwo(1,2));

// function expression
let productOfThree=function(a,b,c){
    let product2 = a*b*c;
    return product2;
}
console.log("product of three Numbers: ",productOfThree(1,2,3));

// arrow expression
let productOfFour=(a,b,c,d)=>a*b*c*d;
console.log("product of Four Numbers: ",productOfFour(1,2,3,4));

console.log("----------------");
console.log("----------------");







// Exercise:
console.log("Exercise-1");
let user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}


for(let p in user){
    if(typeof user[p] === 'object'){
        for(let key in user[p]){
            if(typeof(user[p][key]) === 'object'){
                for(let key1 in user[p][key]){
                    console.log(`${key1} is ${user[p][key][key1]}`)
                }
            }
            else{
            console.log(`${key} is ${user[p][key]}`);
            }
        }
    }
    else{
        console.log(`${p} is ${user[p]}`);
    }
}

