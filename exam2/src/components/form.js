import React,{ useState} from "react"


export default function Form(props){
    const [formDetails,setFormDetails]=useState({
         carNumber:"",
         time:''
    })
     const changeHandler=(event)=>{
         setFormDetails((prev)=>{
            return{
                ...prev,
                [event.target.name]:event.target.value 
            }
         })
     }

     const sendData=()=>{
          props.Data(formDetails)
     }
    return(
        <form>
             <input type="text" placeholder="carNumber" value={formDetails.carNumber} name="carNumber" onChange={changeHandler}/>
             <input type="time" placeholder="arrivedTime" value={formDetails.time} name="time" onChange={changeHandler}/>
             <button type="button" onClick={sendData}>in</button>
             <button type="button">out</button>
             
        </form>
    )
}