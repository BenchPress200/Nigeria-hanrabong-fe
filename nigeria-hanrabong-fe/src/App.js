import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Welcome from "./pages/Welcome"
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path = {"/"} element = {<Welcome />}></Route>
        <Route path = {"/details"} element = {<Details />}></Route> 
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
