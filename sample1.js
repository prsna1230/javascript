let obj1={
    a:10,
    b:20,
    innerObj1:{
        id:1011,
        name:'prasanna'
    }
}
let copyObject1={...obj1};
// obj1.a=1000;
// obj1.innerObj1.name='shreya';
console.log(obj1);
let str = JSON.parse(JSON.stringify(obj1));
obj1.a=1000;
obj1.innerObj1.name='shreya';
console.log(str);
