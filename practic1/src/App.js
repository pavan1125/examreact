import axios from "axios";
import React,{useEffect,createContext, useState} from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css';
import Screen from "./components/Screen";
import Movies from "./components/Movies";
import Home from "./components/Home";
export const Context=createContext()
function App() {
  const  [movieDetails,setMoviedetails]=useState([])
  const [filterDetails,setFilterDetails]=useState([])
  

  useEffect(()=>{
       axios.get("assets/MovieDetail.json")
       .then(res=>setMoviedetails(res.data))

       axios.get("assets/Filter.json")
       .then(res=>setFilterDetails(res.data))
  },[])
  console.log(movieDetails)
  console.log(filterDetails)
  return (
    <Context.Provider value={{movieDetails:movieDetails,filterDetails:filterDetails}}>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}>
             <Route path="movies" element={<Movies/>}>

             <Route path=":id" element={<Screen/>} />
             </Route>
          </Route>
         </Routes>
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
