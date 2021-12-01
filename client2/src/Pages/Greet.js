import { useEffect, useState } from "react";

function Greet() {
  const [quote, setQuote] = useState("");
  const [mail, setMail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const req = await fetch("http://localhost:5000/api/quote", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        quote: quote,
      }),
    });
    const data = await req.json();
    if (data.status === "ok") {
      setQuote("");
    } else {
      alert("Error");
    }
  }

  return (
    <div>
      <h1>Quote: {quote}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Update Info"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Greet;
