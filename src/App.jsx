import { useState, useRef } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import users from "./js/users";

function App() {
  // const [title, setTitle] = useState("");
  const [loginError, setLoginError] = useState(false);

  // creamos 2 referencias
  const userRef = useRef("");
  const passwordRef = useRef("");

  const Navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const email = userRef.current.value;
    const password = passwordRef.current.value;

    const user = users.find( user =>  user.email == email && user.password == password);

    if(user) {
      Navigate("/main");
    } else {
      setLoginError(true)
    }

  };

  return (
    <div className="container-login">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Usuario"
          ref={userRef}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          required
          ref={passwordRef}
        />

        {
          loginError && <span>Error. Please try again.</span>
        }
        <button>INGRESAR</button>
      </form>
    </div>
  );
}

export default App;
// Hebert
