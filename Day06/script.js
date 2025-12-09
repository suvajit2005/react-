
// import React, {useState} from "react"
// import ReactDOM from 'react-dom/client'



// function Counter(){

//     let [count, setCount] = useState(0);

//     function incrementnumber(){
//         setCount(count+1);
//         // console.log("count value is: " , count);
//         // document.querySelector('h1').innerText = `Count is ${count}`;
//     }

//     function decrementnumber(){
//         setCount(count-1);
//         // console.log("count value is: " , count);
//         // document.querySelector('h1').innerText = `Count is ${count}`;
//     }

//     return (
//         <div className="first">
//        <h1>Count is: {count}</h1>
//        <button onClick={()=>setCount(count+1)}>Increment {count}</button>
//        <button onClick={decrementnumber}>Decrement {count}</button>
//        </div>
//     )
// }


// ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)
import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
function Counter()
{   const [count, setCount]=useState(0);
    function incremenetnumber()

    {
        setCount(count+1);

    }
    function decrementnumber(){
        setCount(count+1);

    }
    return(
        <div className="main">
            <h1>The counter is {count}</h1>
            <button onClick={incremenetnumber}>INCREMENET {count}</button>
            <button onClick={decrementnumber}>DECREMENET{count}</button>
        </div>
    )

    
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Counter></Counter>)