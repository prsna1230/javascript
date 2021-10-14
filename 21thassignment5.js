function searchOfSubString(str){
    let originalString ="Prasanna is very good and handsome boy";
    let str1 = originalString.split(" ");
    for(let v in str1){
        if(str==str1[v]){
            console.log("Search Success");
            console.log(originalString.indexOf(str));
        }
        else{
              console.log("Search Unsuccess");
          }
    }
}
searchOfSubString("is");