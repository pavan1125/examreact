import React,{useState,useEffect} from "react"
import axios from "axios";
export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [stop,setStop]=useState(false)
  const [answers, setAnswers] = useState({
    1: "",
    2: "",
    3: "",
  });
  const [examIsOver,setExamIsOver]=useState(false)

  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState(0)
  

  useEffect(() => {
    axios.get("questions.json").then((res) => setQuestions(res.data));
  }, []);


  useEffect(() => {
    if(!stop){

        const interval = setInterval(() => {
          if (seconds === 0) {
            setSeconds(59);
            setMinutes((prevMinutes) => prevMinutes - 1);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
          if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
          }
        }, 1000);
        return () => clearInterval(interval);
    }
  }, [minutes, seconds,stop]);
   


const stopHandler=()=>{
    setStop(true)
}

const submitHandler=()=>{
    setStop(true)
    setExamIsOver(true);
  console.log(answers)
  alert("thanks for apearing")
}

  const changeHandler = (e) => {
    const questionId = e.target.name;
    const selectedOption = e.target.value;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };
  return (
    <div>
        { !examIsOver &&
         <div>

             <div>{minutes<10 ? "0"+minutes:minutes}:{seconds<10 ?"0"+seconds:seconds}</div>
             <button onClick={stopHandler}>pause</button>
             <button onClick={()=>setStop(false)}>resume</button>
         </div>
        
        }
      
      <ol>
        {questions.map((ques) => {
            return (
            <ul key={ques.QuestionID}>
              {ques.Description}
              {ques.Options.map((option) => {
                return (
                   
                  <li key={option}>
                    <label>
                      <input
                        type="radio"
                        name={ques.QuestionID}
                        value={option}
                        onChange={changeHandler}
                      />
                      {option}
                    </label>
                  </li>
                    

                  
                );
              })}
              {
               examIsOver &&
             <div>
                <p><b>correct Answer</b> {ques.Answer}</p> 
                <p><b>your Answer</b> {answers[ques.QuestionID]}</p> 
                
             </div>
              }
            </ul>
          );
        })}
      </ol>

      {!examIsOver && <button onClick={submitHandler}>submit</button>}
    </div>
  );
}
