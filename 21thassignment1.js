// // assignment function
// function Product(productModel,productNumber,productName,productMrp,productBrand){
//     this.productModel=productModel;
//     this.productNumber=productNumber;
//     this.productName=productName;
//     this.productMrp=productMrp;
//     this.productBrand=productBrand;
// }
// Product.prototype.getPrice=function(discount){
//     let priceOfProduct = this.productMrp- this.productMrp*(discount/100);
//     return priceOfProduct;
// }

// // create 1st product
// let p1 = new Product('A1',11,'SamsungMobiles',15000,'Samsung')
// // delete copyObj.productModel;
// // create 2nd product
// let p2 = new Product('B2',21,'OppoMobiles',35000,'Oppo')
// // create 3rd product
// let p3 = new Product('C3',31,'AppleMobiles',75000,'Apple')
// // create 4th product
// let p4 = new Product('D4',41,'RedmiMobiles',12000,'Redmi')
// // create 5th product
// let p5 = new Product('E5',51,'NokiaMobiles',18000,'Nokia')


// // swallow copy
// let copyObj1= {...p1};
// copyObj1.productNumber=2001100;
// // let copyObj2 = p1.assign(new Product(),p1);





// console.log(p1);
// console.log(copyObj1);
// // console.log(copyObj2);
// console.log("The price of the product: ",p1.getPrice(10));
// console.log(p2);
// console.log("The price of the product: ",p2.getPrice(12));
// console.log(p3);
// console.log("The price of the product: ",p3.getPrice(5));
// console.log(p4);
// console.log("The price of the product: ",p4.getPrice(18));
// console.log(p5);
// console.log("The price of the product: ",p5.getPrice(3));


let obj ={
    sno:100,
    name:'Prasanna',
    address:{
        street:'shanmuganagar',
        state:'Tamilnadu'
    },
    skills:['js','react']
}

let cpyObj = {...obj};
cpyObj.sno =1234;
cpyObj.address.street='Chinnakanmai';
cpyObj.skills[1]='angular'
console.log('obj: ',obj);
console.log('copyObj: ',cpyObj);