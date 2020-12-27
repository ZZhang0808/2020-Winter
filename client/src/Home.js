import React, { useState } from 'react';

function Home() {
  const [data, setData] = useState(undefined);
  let config = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
  };
  fetch('http://localhost:8000/user/1', config).then(user => user.json().then(result => setData(result)));
  return (
    <div className="App">
      <p>{data}</p>
    </div>
  );
}

export default Home;
