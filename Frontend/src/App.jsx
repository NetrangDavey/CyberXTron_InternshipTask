import React from "react"
import { BrowserRouter , Routes, Route ,Navigate} from 'react-router-dom';
import Details from "./pages/Details";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Details/>} />       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
