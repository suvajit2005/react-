// import React from "react";
// import ReactDOM from "react-dom/client"
// import React from "react";
// import ReactDOM from "react-dom/client"
// const element = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
// const element2 = React.createElement("h2",{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Maja aaya muje");
// console.log(element);
//                   React                        Render
// React.createElement() => react element(JSObject) => HTML Element

// React.createElement('h1',{},"Hello Coder Army");
// const newElement = <h1>Hello Coder Army</h1>
//     babel:                   React                      Render
// JSX => React.createElement() => react element(JSObject) => HTML Element

// JSX: JS ke expression
// const names = "Rohit";
// const obj = {
//     age:23,
//     salary:60
// }

// const obj2 = {
//     backgroundColor:"black",
//     color:"pink",
//     fontSize:"30px"
// }

// // React ELement
// const newElement = (
//     <div>
//          <h1 id="first" className="second" >Hello Coder Army {names}</h1>
//          <h2 style={obj2}>Maja aaya muje {obj.age}</h2>
//     </div>
// )


// // React Component
// // function Based Component

// function greet(){
//     return <h1>Aur bhai kaisa hai</h1>
// };

// const meet = ()=>{
//     return <h2>Mera sab achaa hai</h2>
// }


// const newElement2 = greet();
// const newElement3 = meet();

// const newElement4 = <></>

// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// Reactroot.render(<>{greet()} {meet()} {newElement}</>);

// // JSX: Javascript XML: HTML code direct js ke andar likh sakte ho
// import React from "react";
// import ReactDOM from "react-dom/client";

// function Hello() {
//   return (
//     <>
//       <h1>Hello bhai, kaisa hai?</h1>
//       <h1>hello brother</h1>
//     </>
//   );
// }

// const obj = {
//   name: "surya"
// };

// function Hi() {
//   return (
//     <>
//       <p>Ki re bhai {obj.name}</p>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <>
//     <Hello />
//     <Hi />
//   </>
// );

  




// version: 19.0.0

// function sum(a,b,c){
//     return a+b+c;
// }

// function subtract(a,b){
//     return a-b;
// }

// sum(2,3,0);
const name="suvajit"

import React from "react";
import reactDom from "react-dom/client";

function Hello()
{
  return(
    <ul>
      <li>helllo{name}</li>
      <li>hello</li>
      <li>hello</li>
    </ul>
  )
}
function Hi()
{
  return(
    <ul>
      <li>hi</li>
        <li>hi</li>
          <li>hi</li>
    </ul>
  )
}
function Red()
{
  return(
    <div style={{backgroundColor:"red",height:"500px",width:"100vw",margin:"0px",padding:"0px"}}></div>
  )
}
const root=reactDom.createRoot(document.getElementById("root"));
root.render(<>{<Hello></Hello>}{<Hi></Hi>}{<Red></Red>}</>)


