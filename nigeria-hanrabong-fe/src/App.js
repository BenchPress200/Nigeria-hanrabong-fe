import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Welcome from "./pages/Welcome"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path = {"/"} element = {<Welcome />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
