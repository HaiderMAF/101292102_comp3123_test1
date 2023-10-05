//create function turn words to lower case
// const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
//return a promise
//have to filter non strings and lower case the remaining words
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
//Async Functions call promise and .then and err handle
function lowerCaseWords(mixedArray){
    //promise
    return new Promise((resolve, reject) => {
        //console.log("We Here")
        //need to check input if array
        if(!Array.isArray(mixedArray)){
            //filter arrays
            reject("No Strings found/Not an Aray")
        } else {
            const arrayCheck = mixedArray.filter((element)=> typeof element == "string");
            const arrayRevised = arrayCheck.map((element) => element.toLowerCase())
            resolve(arrayRevised)
            
        }
    })
}

lowerCaseWords(mixedArray)
    .then((result)=>{
        console.log(result)
    })
    .catch((err) => {
        console.error(err)
    })