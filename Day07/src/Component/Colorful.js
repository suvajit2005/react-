// import React , { useState,useEffect } from "react";

// function Colorful(){
   
//      const [color,setColor] = useState("black");
        
//         console.log('first');
//         // console.log(name);
//         // useEffect(Callback Function, dependency)
//         useEffect(()=>{
//             console.log("UseEffect Executed");
//             document.body.style.backgroundColor = color;
//         },[color]);
    
//         // console.log("second")
    
       
       
//         return (
//             <>
//               <h2>{name}</h2>
//               <h1>Background Color Changer</h1>
//               <div className="but">
//                 <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
//                 <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
//                 <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
//                 <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
//                 <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
//               </div>
//             </>
//         )

// }

// export default React.memo(Colorful);
import React,{useEffect,useState} from "react";
function Colorful({name}){
  const [color,setcolor]=useState("black");
  useEffect(()=>{
     document.body.style.backgroundColor=color;

  },[color])
 
  console.log(name)
  return(
    <>
    <h1>Background Color changer</h1>
    <button onClick={()=>setcolor("red")}>Red</button>
    <button onClick={()=>setcolor("green")}>Green</button>
    <button onClick={()=>setcolor("yellow")}>Yellow</button>
    <button onClick={()=>setcolor("pink")}>Pink</button>
    <button onClick={()=>setcolor("indigo")}>Indigo</button>
    </>
  )
}
export default React.memo(Colorful);