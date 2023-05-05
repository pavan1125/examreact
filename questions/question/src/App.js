import React,{useState,useEffect} from "react"
import axios from "axios";
function App() {
   const [questions,setQuestions]=useState([])

   const [answers,setAnswers]=useState({
         "1":"",
         "2":"",
         "3":"",
         "4":""
   })
   console.log(answers)

   useEffect(()=>{
      axios.get("questions.json")
      .then(res=>setQuestions(res.data))
   },[])

    console.log(questions)

  const ChangeHandler=(e)=>{
     setAnswers((prev)=>{
        return{
          ...prev,
          [e.target.name]:e.target.value
        }
     })
  }
  return (
    <div className="App">
      <ol>

       {
        questions.map((ques)=>{
          return(
              <ul key={ques.QuestionID}>
                  {ques.Description}
                  {ques.Options.map((option,index)=>{
                    let ind=index
                     return(
                      <li key={option}>
                        <label>
                        <input type="radio" name={ques.QuestionID} value={answers} onChange={ChangeHandler}/>
                          {option}
                        </label>
                      </li>
                     )
                  })}
              </ul>
               
          )
        })
       }
      </ol>
    </div>
  );
}

export default App;
