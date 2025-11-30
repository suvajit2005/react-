import React from "react";
import ReactDOM from "react-dom/client"
// // import React from "react";
// // import ReactDom from "react-dom/clint"

// // Header
// // Body
// // Footer

// function Card(props){
//     return (
//         <div style={{border:"2px solid black", padding:"2px"}}>
//             <img src="https://printify.com/wp-content/uploads/2022/07/Custom-T-Shirts-Womens-T-Shirts.jpg" height="200px" width="200px" />
//             <div style={{textAlign:"center"}}>
//                 <h2>{props.cloth}</h2>
//                 <h1>{props.offer}</h1>
//                 <h2>Shop Now</h2>
//             </div>
//         </div>
//     )
// }

// function Nav()
// {
//   return (
//     <div style={{height:"60px",backgroundColor:"gray",display:"flex",justifyContent:"space-around",width:"100vw"}}>

//       <span style={{marginTop:"20px",color:"lightgreen",fontSize:"20px"}}>ABout us</span>
//       <span style={{marginTop:"20px",color:"lightgreen",fontSize:"20px"}}>ABout us</span>
//       <span style={{marginTop:"20px",color:"lightgreen",fontSize:"20px"}}>ABout us</span>
//       <span style={{marginTop:"20px",color:"lightgreen",fontSize:"20px"}}>ABout us</span>
//       <span style={{marginTop:"20px",color:"lightgreen",fontSize:"20px"}}>ABout us</span>
//       <span style={{marginTop:"20px",color:"lightgreen",fontSize:"20px"}}>ABout us</span>



//     </div>

//   )




// }










// const arr = [{cloth:"Tshirt", Offer:"20-40%Off"},{cloth:"Pant", Offer:"30-50%Off"},{cloth:"Skirt", Offer:"10-20%Off"},{cloth:"Kurta", Offer:"30-60%Off"},{cloth:"Patloon", Offer:"11-40%Off"},{cloth:"Shoes", Offer:"40-60%Off"},{cloth:"Shirt", Offer:"10-20%Off"}]



// function App(){
//   return(
//     <>
//     {/* // Header */}
//       <Nav/>



//     {/* // Body */}
//     <div style={{ gap:"10px" ,display:"flex" ,flexWrap:"wrap", width:"100vw",justifyContent:"center",alignItems:"center"}}>
//         {/* <Card cloth="T-shirt" offer="20-80%off" />
//         <Card cloth="Jeans" offer="30-80%off"/>
//         <Card cloth="pant" offer="50-60%off"/>
//         <Card cloth="Kurta" offer="30-80%off"/>
//         <Card cloth="Pajama" offer="10-80%off" />
//         <Card cloth="T-shirt" offer="20-80%off"/>
//         <Card cloth="T-shirt" offer="20-80%off"/>
//         <Card cloth="T-shirt" offer="20-80%off"/> */}

//         {
//           arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer}/>)   
//         }

//     </div>
//     </>
//     // footer
//   )
// }

// // // [<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>]


// const Root = ReactDOM.createRoot(document.getElementById('root'));
// Root.render(<App/>);
// // if image.png is in the same folder


function Header() {
  return (
    <>
      <div className="header">
        <span>hello</span>
        <span>about</span>
        <span>name</span>
        <span>contact</span>
      </div>
    </>
  )
}
function Card() {
  return (
    <div className="card">
      <img src="https://printify.com/wp-content/uploads/2022/07/Custom-T-Shirts-Womens-T-Shirts.jpg" height="200px" width="200px" />
      <h2>T-Shirt</h2>
      <h3>Price: $500</h3>
    </div>
  );
}

function App()
{
  return(
    <>
    <Header></Header>
    <div className="card1">
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card><Card></Card>
    <Card></Card><Card></Card>
    <Card></Card>
    </div>

    </>
  )
}
const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
