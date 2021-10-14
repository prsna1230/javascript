
// Inheritance
class A{
    constructor(x){
        console.log("A");
        this.x=x;
    }
}
class B extends A{
    constructor(y){
        console.log("B");
        super(y)//calls parent class constructor
        this.y=y
    }
}

let objB = new B(10);
console.log(objB);


// getter and setter method
