import Third from "./Third"
import GlobalContext from "./Global"
import { useContext } from "react"

export default function Second(){
    const {count:no,setCount}=useContext(GlobalContext)
    

    return (
        <>
         <h2>Kaise hai aap sab log{no}</h2>
         <button onClick={()=>{setCount(count+10)} } ></button>
         <Third/>
        </>

    )
}