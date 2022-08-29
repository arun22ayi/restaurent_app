import React, {useEffect} from 'react';


const Counter1 = ({number}) => {


    useEffect(()=>{                                      // it's nothing but component didmount achived by useEffect Hooks
        console.log("Functional Component : Mounting..")
    })

    useEffect(()=>{                                      // it's nothing but component update achived by useEffect Hooks
        console.log("Functional Component : updating..")
            
    },[number])
    useEffect(()=>{                                      // it's nothing but component didmount achived by useEffect Hooks
        console.log("Functional Component : removed..")
    },[])

  return (
    <div>
    {number}
    </div>
  )
}

export default Counter1