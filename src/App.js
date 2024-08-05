import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [roast, setRoast] = useState('');

  const handleRoast = async () => {
    try {
      const response = await axios.post('https://YOUR_API_URL/api/roast', { username });
      setRoast(response.data.message);
    } catch (error) {
      setRoast('Terjadi kesalahan.');
    }
  };

  return (
    <div className="App">
      <h1>Instagram Roaster</h1>
      <input
        type="text"
        placeholder="Masukkan username Instagram"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleRoast}>Roast!</button>
      {roast && <p>{roast}</p>}
    </div>
  );
}

export default App;
