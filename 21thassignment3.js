function frequencyOfOccurence(str){
    let countOfA=0;
    let countOfB=0;
    for(let val in str){
        if(str[val] =='a'){
            countOfA++;
        }
        else if(str[val] =='b'){
            countOfB++;
        }
    }
    console.log("Count of A: ",countOfA);
    console.log("Count of B: ",countOfB)
}

frequencyOfOccurence('abbbaabbababba');