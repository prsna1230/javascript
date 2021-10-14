
// Assignment-1
let product ={
    productNo:101,
    productName:"Mobile",
    productBrand:"Samsung",
    productMrp:15000,
    getProductPrice:function(x){
        return (this.productMrp-(x/100)*this.productMrp);
    }
}

for(let v in product){
        console.log(v," is ",product[v]);
}
console.log("The price of the product after discount: ",product.getProductPrice(10));

console.log("-----------------")
// Assignment-2
employee =[
    emp1={
        empNo:1001,
        empName:"Prasanna",
        empBasic:15000,
        empAddress:{
            plotNo:2002,
            street:"Gandhinagar",
            city:"Madurai"
        }
    },
    emp2={
        empNo:1005,
        empName:"Vikram",
        empBasic:10000,
        empAddress:{
            plotNo:3001,
            street:"Jeevanagar",
            city:"Chennai"
        }
    },
    emp3={
        empNo:1008,
        empName:"Arjuna",
        empBasic:35000,
        empAddress:{
            plotNo:2872,
            street:"Shanmuganagar",
            city:"Kadapa"
        }
    },
    emp4={
        empNo:1001,
        empName:"Raja",
        empBasic:40000,
        empAddress:{
            plotNo:56,
            street:"Rajevnagar",
            city:"Delhi"
        }
    },
    emp5={
        empNo:1001,
        empName:"Prasanna",
        empBasic:15000,
        empAddress:{
            plotNo:2002,
            street:"",
            city:"Madurai"
        }
    }
]


for(let v in employee){
    console.log(`Details of employee ${v}`);
    for(let x in employee[v]){
        if(typeof(employee[v][x]) === 'object'){
            for(let y in employee[v][x]){
                console.log(`   ${y} is ${employee[v][x][y]}`);
            }
        }
        else{
            console.log(`   ${x} is ${employee[v][x]}`);
        }
    }
    console.log("-----");
}

console.log("-----");
console.log("Using Foreach loop");
console.log("-----");

employee.forEach(function(val,index){
    console.log('Details of employee ',index+1);
    for(let v in employee[index]){
        if(typeof(employee[index][v])==='object'){
            for(let temp in employee[index][v]){
                console.log(`   ${temp} is ${employee[index][v][temp]}`);
            }
        }
        else{
            console.log(`   ${v} is ${employee[index][v]}`)
        }
    }
    console.log("-----");
})


// using forof loop
let i=1;
for(v of employee){
    if(typeof v ==="object"){
        console.log("Details of employee: ",i);
        for(let key in v){
            if(typeof v[key] !== "object"){
                console.log(`${key}:${v[key]}`)
            }
        }
        i++;
    }
}


// swapping
console.log("-----------");

function swapFunction1(a,b){
    console.log("Way-1");
    console.log("before swapping:",a,b);
    let temp =a;
    a=b;
    b=temp;
    console.log("after swapping:",a,b);
}

console.log("-----------");

function swapFunction2(a,b){
    console.log("Way-2");
    console.log("before swapping:",a,b);
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("after swapping:",a,b);
}



swapFunction1(10,20);
swapFunction2(10,20);


console.log("-----------");
// factorial of a number
function factorialOfNumber(a){
    let temp =1;
    for(let i=2;i<=a;i++){
        temp *= i;
    }
    return temp;
}


console.log("Factorial of a number is: ",factorialOfNumber(5));