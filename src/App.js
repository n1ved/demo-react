import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetch('http://127.0.0.1:8000/');
      setData(result.data);
      setLoading(false);
    };

    fetchData();
    console.log(data);
  }, []);

  const sendRequest = async () => {
    const response = await fetch('http://127.0.0.1/8000/' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: 'Hello' }),
    });
    console.log(response);
  }

  return (
    <div className="App">
      {loading ? 'Loading...' : data}
      <button onClick={sendRequest}>Send Request</button>
    </div>
  );
}

export default App;