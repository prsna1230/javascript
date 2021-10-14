// 3 persons went to a resturant
// setTimeout(()=>{
//     console.log("Biriyani arrived")
// },7000)
// setTimeout(()=>{
//     console.log("Soup arrived")
// },5000)
// setTimeout(()=>{
//     console.log("Curd rice arrived")
// },3000)


// promises
// let status =false;
// //create promise,
// let myPromise = new Promise((resolve,reject)=>{
//     if(status === true){
//         resolve("promise is resolved");
//     }
//     else{
//         reject("promise is rejected")
//     }
// })

// myPromise
//     .then((data)=>{
//         console.log("status :",data)
//     })
//     .catch((err)=>{
//         console.error("status: ",err);
// //     })


// // -------------------------------------------
// function audioReleasepromise(status){
//     let audioPromise=new Promise((resolve,reject)=>{
//       setTimeout(() => {
//         if(status==true){
//             resolve("Audio Release majakarooo..!!");
//         }
//         else{
//             reject("Sorry, Date will be announced later");
//         }
//       }, 5000);
//     })
//     return audioPromise;
// }

// audioReleasepromise(true)
// .then((data)=>{
//     console.log("status :",data)
// })
// .catch((err)=>{
//     console.error("status: ",err);
// })

// -------------------------------------------
// function engineerGradutes(marks){
//     let engineer = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(marks>=90){
//                 resolve("Promoted for 2nd Year")
//             }
//             else if(marks>=80){
//                 resolve("Promoted for 3rd Year")
//             }
//             else if(marks>=70){
//                 resolve("Promoted for 4th Year")
//             }
//             else if(marks>=75){
//                 resolve("Allowed for Intership")
//             }
//             else{
//                 reject("Sorry, You failed");
//             }
//         },5000);
//     })
//     return engineer;
// }

// engineerGradutes(78)
// .then((data)=>{
//     console.log("status: ",data);
// })
// .catch((err)=>{
//     console.error("status: ",err);
// })



// Assignment by own
function engineerGradutes(...mark){
    let engineer1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(mark[0] >=90){
                resolve("Promoted for 2nd Year")
            }
            else{
                reject("Sorry, You failed");
            }
        },5000);

    let engineer2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(mark[0] >=90){
                resolve("Promoted for 2nd Year")
            }
            else{
                reject("Sorry, You failed");
            }
        },5000);

    let engineer3 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(mark[0] >=90){
                resolve("Promoted for 2nd Year")
            }
            else{
                reject("Sorry, You failed");
            }
        },5000);

    let engineer4 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(mark[0] >=90){
                resolve("Promoted for 2nd Year")
            }
            else{
                reject("Sorry, You failed");
            }
        },5000);

       
    })
   return engineer;
}

engineerGradutes(95,85,75,68)
.then((data)=>{
    console.log(data);
    return data; 
})
.then((data1)=>{
    console.log(data1); 
    return data1; 
    // return data1
})
.then((data2)=>{
    console.log(data2); 
    return data2; 
    // return data2
})
.then((data3)=>{
   console.log(data3);
})
.catch((err)=>{
    console.error("status: ",err);
})