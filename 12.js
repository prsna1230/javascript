
// fetch Api


function getData(url){
    fetch(url)
    .then( response=>{
        if(response.ok === false){
            throw new Error("Incorrect end point")
        }
        else{
            // extract data from response object
            return response.json()
        }
    })
    .then(data=>console.table(data))
    .catch(err=>console.log(err))


    // simplified way of the above..!
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response=>response.json())
    // .then(data=>console.table(data))
    // .catch(err=>console.log(err))

}




getData('https://jsonplaceholder.typicode.com/users');
getData('https://jsonplaceholder.typicode.com/posts');

