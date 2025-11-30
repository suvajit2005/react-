// const element = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
// const element2 = React.createElement("h2",{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Maja aaya muje");
// // ReactDOM.render(element,document.getElementById('root'));
// // element : 50 card pade hue hai
// const div1 = React.createElement('div',{},[element,element2]);
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// // React root container: is
// // Reactroot.render(element);
// // Reactroot.render(element2);
// Reactroot.render(div1);
const one=React.createElement("h1",{id:"first",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"hello world bhai");
const two=React.createElement("h1",{id:"second",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"hello");
const names=React.createElement("h1",{id:"name",style:{color:"orange"}},"suvajit")


const hello=React.createElement("li",{},"hello");
const hello2=React.createElement("ul",{style:{backgroundColor:"yellow"}},[hello,hello,hello])
const bye=React.createElement("li",{},"bye");
const bye2=React.createElement("ul",{style:{backgroundColor:"red"}},[bye,bye,bye]);
const div=React.createElement("div",{},[names,one,two,hello2,bye2]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(div)


// {/* <div>
//     <h1>Hello Coder Army</h1>
//     <h2>Maja aaya muje</h2>
// </div> */}




// function sum(a,b){
//     return a+b;
// }

// sum(2,3);
// version: 18.2.3


// function sum(a,b){
//     return a+b;
// }

// function subtract(a,b){
//     return a-b;
// }





// version: 19.0.0

// function sum(a,b,c){
//     return a+b+c;
// }

// function subtract(a,b){
//     return a-b;
// }

// sum(2,3,0);





