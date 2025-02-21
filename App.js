import React, { useState } from "react";

const App = () => {
  const [response, setResponse] = useState(null);

  const sendData = async () => {
    try {
      const res = await fetch("http://localhost:10000/bfhl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: ["M", "1", "334", "4", "B"] }),
      });

      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>React to Express API</h1>
      <button onClick={sendData}>Send Data</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default App;
