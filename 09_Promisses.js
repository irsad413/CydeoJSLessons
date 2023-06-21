// we are using new Promise(Function(resolve , reject)) 

let stateoFtheWebpage = function (state) {
    return new Promise(function (resolve , reject) {

        if(state) {
            resolve('Page is loaded')
        }else{

            reject('Page is NOT loaded yet')
        }
     } )
}

console.log(stateoFtheWebpage(true).then(function (result) {

    console.log(result);
} ));

console.log(stateoFtheWebpage(true).then( (result) => {

    console.log(result);
} ));


 console.log(stateoFtheWebpage(false).catch(function(errorMsg) {

    console.log(errorMsg);
 }));

 console.log(stateoFtheWebpage(false).catch((errorMsg) => {

    console.log(errorMsg);
 }));

