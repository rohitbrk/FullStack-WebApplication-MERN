import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        mail,
        password,
        quote,
      }),
    });
    const data = await response.json();
    if (data.status === "ok") {
      navigate("/login");
    } else {
      console.log("error");
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        Name:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Whats on your Mind ? :{" "}
        <input
          type="text"
          placeholder="Quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <br />
        Email:{" "}
        <input
          type="email"
          placeholder="Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <br />
        Password:{" "}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Register;
