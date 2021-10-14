// Find frequency of a and b in-- abababbaabbaaab
let str = 'abababbaabbaaabbbaaa';
let str1 =str.split('');
let countOfa=0;
let countOfb=0;
for(let v in str1){
    if(str1[v] == 'a'){
        countOfa++;
    }
    else if(str1[v] == 'b'){
        countOfb++;
    }
}
console.log("a's count  ->",countOfa);
console.log("b's count  ->",countOfb);


function test(...a){
    console.log(a)
    let sum=20;
    sum = sum+a[0];
    console.log(sum)
}

test(10);

// spread operator
let arr1 = [10,20,30]
let arr2 = [40,50,60]
let copyArr =[...arr1,...arr2];//very similiar to assign
console.log(copyArr);


// destructuring of objects
let obj = {
    a:10,
    b:20,
    c:30
}

let {a}=obj;
console.log(a);

// destructuring of Array
let aar = [100,200,300]
let[x,y,z] =aar;
console.log(z);


// construcctor function
function StudentDetails(id,name,age,marks,address){
    this.id=id;
    this.name=name;
    this.age=age;
    this.address=address;
    this.marks=marks;
    // method to return avg
    this.getAverage = function(){
        let sumOfMarks = this.marks.reduce((sum,marks)=>sum+marks);
        let average = sumOfMarks/this.marks.length;
        return average;
    }
}

// create first student
let s1 = new StudentDetails(101,'Prasanna',22,[60,60,60],{plotNo:10,city:'Madurai'});

// create second student
let s2 = new StudentDetails(102,'Raja',23,[80,80,80],{plotNo:550,city:'Chennai'});
// create third student
let s3 = new StudentDetails(103,'Rani',24,[70,70,70],{plotNo:900,city:'Bangalore'});

console.log(s1);
console.log(s1.getAverage);
console.log(s2);
console.log(s3);