const promise = new Promise((resolve, reject) => {
   setTimeout(()=>{
    resolve({
        name: 'Byron',
        age: 37
    });

    reject('Something went wrong!')
   }, 5000);
});

console.log('Before')

promise.then((data) =>{
    console.log('1', data);

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
         resolve('This is my other promise');
        }, 5000);
     });
}).then((str) =>{
    console.log('does this run?', str)
}).catch((error) => {
    console.log('error', error)
});


// An alternative syntax


// promise.then((data) =>{
//     console.log('data')
// }, (error) => {
//     console.log('error', error)
// })


console.log('After');