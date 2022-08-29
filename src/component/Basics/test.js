import React from 'react'


const test = () => {                                                    // es6 function
  return (
    <div>
    <MyName/>
    <h1>dfhjklaslhgfdg fuhei</h1>                                      
    </div>
  )
}




const MyName = () => {
    return<h1>whkfguhe</h1>;
}





function saw1 () {                                           // test functiion as older
    return <h1>Hellow world</h1>;
}


// how react is actually looking into it

const see2 = () => {                                            // always function names should be different                                  
    return React.createElement("h1", {}, "Hello World");
};




export default test;