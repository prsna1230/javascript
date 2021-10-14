class Emp{
    constructor(eno,name,age,marks){
        this.eno=eno;
        this.name=name;
        this.age=age;
        this.marks=marks;
    }

    //method
    getAverage(){
        let sumOfmarks = this.marks.reduce((sum,mark)=>sum+mark)
        let average = sumOfmarks/this.marks.length;
        return average;
    }

    static sayHello(){
        return "Gud afternoon";
    }
}

// create first employee
let emp1 = new Emp(100,'Prasanna',22,[99,98,97])
console.log(emp1);
console.log(emp1.getAverage());
