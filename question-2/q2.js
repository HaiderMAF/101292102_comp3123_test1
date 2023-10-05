//Promises
//method resolvedPromise similar to delayed and resolves a messageaftera timeout of 500ms
//method rejectedPromise similar to delayed Exception and rejects an arror message after a timeout of 500ms
//call both seperatley and handle the reolved and reject results and then output to console

const resolvedPromise = () => {
    return new Promise (() => {
        setTimeout(() => {
            let success = {'message': 'delayed success!'}
            console.log(success);
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                throw new Error('delayed exception!');
            } catch(e) {
                //This catches error and calling withing itself
                reject({error : e.message})
            }
        }, 500)
    })
}

resolvedPromise()
    .then(()=>{
        console.log()
    })
    .catch((error)=> {
        console.log(error)
    })
rejectedPromise()
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })