class ApiService {

  willIGetMyData() {
    return new Promise(
      (resolve, reject) => {
        const data = {
          company: {
            companyName: 'Makers Academy',
            size: 200
          }
        };
        var testBool = true     
        if (testBool){
        resolve(data)
        } else {
          var reason = new Error ("Because I want to");
          reject(reason);
        }
      }
    );
  }
  
  getCompany() {
    this.willIGetMyData()
      .then( (fulfilled) => {
        return fulfilled;
      })
      .catch((error) => {
        return error
        console.log("you still don't understand Promises");
      })
  }
}

export default ApiService
// const service = new ApiService
// service.getCompany();


// // ES5
// var isMomHappy = false;

// // Promise
// var willIGetNewPhone = new Promise(
//   function(resolve, reject) {
//     if (isMomHappy) {
//       var phone = {
//         brand: 'Iphone',
//         color: 'Silver'
//       };
//       resolve(phone); // fulfilled
//     } else {
//       var reason = new Error('mom is not happy')
//       reject(reason) // rejectedd
//     }
//   }
// );

// // Call our promise
// var askMom = function() {
//   willIGetNewPhone
//   .then( function (fulfilled) {
//     // yay, new phone
//     console.log(fulfilled)
//     // output: { brand: 'Iphone' ...}
//   })
//   .catch(function (error) {
//     // oops, don't buy it
//     console.log(error.message);
//     // output: 'mom is not happy'
//   })
// }

// askMom();
