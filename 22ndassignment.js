class Product{
    constructor(pId,pName,pMrp){
        this.pId =pId;
        this.pName=pName;
        this.pMrp=pMrp;
    }

    // method
    getPrice(discount){
        return (this.pMrp-(discount/100*this.pMrp))
    }
}
// product-1
let pro1 = new Product(11,'Samsung',10000);
console.log(pro1);
console.log("The price of Product:",pro1.getPrice(10));
// product-2
let pro2 = new Product(61,'Redmi',15000);
console.log(pro2);
console.log("The price of Product:",pro2.getPrice(10));
// product-3
let pro3 = new Product(101,'Oppo',45000);
console.log(pro2);
console.log("The price of Product:",pro3.getPrice(10));
// product-4
let pro4 = new Product(1221,'Apple',65000);
console.log(pro2);
console.log("The price of Product:",pro4.getPrice(10));
// product-5
let pro5 = new Product(3333,'Nokia',18000);
console.log(pro2);
console.log("The price of Product:",pro5.getPrice(10));
