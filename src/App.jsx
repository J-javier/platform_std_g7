import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    Navigate("/main");
  };

  return (
    <div className="container-login">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Usuario"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>INGRESAR</button>
      </form>
    </div>
  );
}

export default App;
// Hebert
