import React from "react"

import Home from "./components/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Questions from "./components/Questions";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}>
      <Route path="questions" element={<Questions/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
