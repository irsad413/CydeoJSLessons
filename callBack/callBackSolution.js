function waitingForSomeServerToAct(myCallback) {

    let dataNeeded ; 

    setTimeout(() => {

        console.log("BackEnd Information have just been received");
        dataNeeded = "Cydeo" ; 
        myCallback(dataNeeded)
        
    }, 5000);
    
    return dataNeeded ; 
}


function functionThatNeedsBackEndData (info) {

    console.log(" I need to use BackEnd Data " + info);
}


waitingForSomeServerToAct(functionThatNeedsBackEndData)


/**
 * the first solution JS developers came up with was this callBack situation
 * ES6 -- promises handles async nature of JS
 * 2017 --- async function , await keyword\
 * what is a callBack Hell ? 
 * what is async code what is sync code? 
 */


alert("This is a JS alert")

/**
 * There are some JS commands like alert , prompt : these will work only in browers with live server
 * 
 */