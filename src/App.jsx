import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <h1>Create Account</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("Inscription réussie 🚀");
        }}
      >
        <p>Name</p>
        <input
          type="text"
          placeholder="John Wick"
          onChange={(event) => {
            console.log(event.target.value);
            setName(event.target.value);
          }}
        />
        <p>Email</p>
        <input
          type="email"
          placeholder="johnwick@lereacteur.io"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="C4o3t2i1nenTal"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <p>Confirm your Password</p>
        <input
          type="password"
          placeholder="C4o3t2i1nenTal"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
