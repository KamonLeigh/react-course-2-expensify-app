import * as firebase from 'firebase';

const config = {
    apiKey:  process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_DATABASEURL,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET ,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID
  };

  firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider ,database as default }




// // database.ref('expenses')
// //         .once('value')
// //         .then((snapshot) => {
// //             const expenses = [];
// //             snapshot.forEach((childSnapshot) =>{
// //                 expenses.push({
// //                  id: childSnapshot.key,
// //                  ...childSnapshot.val()   
// //                 })
// //             })
// //             console.log(expenses)
// //         })


// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       })
// //   })
// //   console.log(expenses);
// // })

// // child_remove

// database.ref('expenses').on('child_removed', (snapshot) =>{
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed

//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// // child_added

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });



// database.ref('expenses').push({
//     description:'shopping',
//     note:'This is what I need to do',
//     amount:1234,
//     createdat:6464747
// });






// //database.ref('notes/-L7nxQH3EhuflcBZr9qR').remove();
// //database.ref('notes').set(notes);

// // Andrew is a software developer at amazon

// // Change data and mahe sure it reprints


// // const exerciseChange = database.ref().on('value', (snapshot) => {
// //     const name = snapshot.val().name;
// //     const job = snapshot.val().job.title;
// //     const location = snapshot.val().job.company;

// //     console.log(`${name} is ${job} at ${location}`)
// // }, (e) => {
// //     console.log('Error in fetchng data', e)
// // })

// // const onValueChange =database.ref().on('value', (snapshot) => {
// //     consoleo.log(snapshot.val());
// //   }, (e) =>{
// //     console.log('Error un fetching date', e);
// //   });

// // setTimeout(() =>{
// //     database.ref('age').set(38);
// // },3500);

// // setTimeout(() =>{
// //     database.ref().off(onValueChange7);
// // },7000);


// // setTimeout(() =>{
// //     database.ref('age').set(45);
// // },10500);


// // database.ref()
// //     .once('value')
// //     .then((snapshot) => {
// //      const val = snapshot.val();
// //      console.log(val)
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data', e);
// //     });



//   // Test connection

// //   database.ref().set({
// //       name: 'Byron Dunkley',
// //       age: 26,
// //       stressLevel: 6,
// //       job: {
// //         title: 'Software developer',
// //         company:'Google'
// //       },
// //       location: {
// //           city: 'London',
// //           country:'UK'
// //       }
// //   }).then(() =>{
// //       console.log('Data is saved');
// //   }).catch((e) => {
// //     console.log('This failed', e);
// //   });


//   // Change the stress level to 9
//   // Change company to Amazon
//   // Change the location city to Seattle

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
    
// // });


// //  database.ref('isSingle').set(null)
// //          .then(() =>{
// //              console.log('data has been removed')
// //          }).catch((e) =>{
// //              console.log('Error', e)
// //          });                

// // //   database.ref('isSingle').remove()
// //           .then(()=>{
// //               console.log('data has been removed')
// //           }).catch((e) => {
// //             console.log('Error', e);
// //           });