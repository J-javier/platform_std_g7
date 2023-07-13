import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./components/Login";
import Data from "./components/Data";

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={ <Login/> }/> 


          <Route path="/data" element={ <Data/> }/> 


          <Route path="*" element={ <h2>404 Not Found</h2> }/> 

        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;

