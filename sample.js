
// // 1
// let obj1={
//     a:10,
//     b:20,
//     innerObj1:{
//         name:'prasanna'
//     }
// }

// let copyObject1=obj1;
// obj1.a=100;
// obj1.innerObj1.name='Aishu';
// console.log(obj1);//output--a:100,b:20
// console.log(copyObject1);//output--a:100,b:20


// // 2
// let obj2={
//     a:10,
//     b:20,
//     innerObj2:{
//         name:'prasanna'
//     }
// }
// let copyObject2=Object.assign({},obj2);
// copyObject2.a=100;
// obj2.innerObj2.name='sneha';
// console.log(obj2)//output--a:10,b:20
// console.log(copyObject2)//output--a:100,b:20.

// 3

let obj3={
    a:10,
    b:20,
    innerObj3:{
        id:1011,
        name:'prasanna'
    }
}
let copyObject3={...obj3};
obj3.a=1000;
obj3.innerObj3.name='shreya';
console.log(obj3);//output--a:1000,b:20
console.log(copyObject3);//output--a:10,b:20


//Above all are known as the swallow copy:
//copy of an object copies the ‘main’ object, 
//-but doesn’t copy the inner objects. The ‘inner objects’
//-are shared between the original object and its copy. 

//-------------------deep Copy-----------------//


// 4
let str = JSON.stringify(obj3);
let coppyiedObject =JSON.parse(str);
// obj3.innerObj3.id=00000;
obj3.innerObj3.name="ganesh";
// console.log(coppyiedObject);
console.log(coppyiedObject);
