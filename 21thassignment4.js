//Reverse of a string:
function reverseOfString(str){
    for(let i=str.length-1; i>=0;i--){
        console.log(str[i]);
    }
}
reverseOfString("prasanna");

// destructure of an object
function studentReport(obj){
    let {m1,m2} =obj;
    let avg = m1+m2/2
    return avg;
}

console.log("Average of marks: ",studentReport({m1:95,m2:90}));