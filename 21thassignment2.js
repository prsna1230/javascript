function bigOfNum(...numbers){
    let largestNum = numbers[0];
    for(let index in numbers){
        if(largestNum < numbers[index]){
            largestNum=numbers[index];
        }
    }
    console.log("The Biggest Of the given number is:",largestNum);

}

bigOfNum(10,20,30);


