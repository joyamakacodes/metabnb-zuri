import Home from './Screens/Home';
import Place from "./Screens/Place"
import './App.css';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='place' element={<Place/>}/>
      </Routes>
      
    </div>
  )
}

export default App;

