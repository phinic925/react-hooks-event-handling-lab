// Code EyesOnMe Component Here
import React from "react";
function EyesOnMe(){
    function eyesOnMeBlur(){
        console.log("Hey! Eyes on me!")
    }
    function eyesOnMeFocus(){
        console.log("Good!")
    }
    return(
        <div>
            <button onBlur={eyesOnMeBlur} onFocus={eyesOnMeFocus}> Eyes on me </button>
        </div>
    )
}
export default EyesOnMe;