// pages/index.js
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async (type) => {
    try {
      const response = await axios.post('/api/generateQR', {
        table: inputValue,
        type,
      });

      setCode(response.data.code);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter QR code or number"
        className="p-2 border border-gray-300 rounded"
      />
      <div className="mt-4">
        <button onClick={() => handleSubmit('number')} className="mr-2">
          Generate Number Code
        </button>
        <button onClick={() => handleSubmit('qr')}>Generate QR Code</button>
      </div>
      {code && (
        <div className="mt-4">
          <p>Generated Code:</p>
          {code.startsWith('data:image') ? (
            <img src={code} alt="QR Code" className="mt-2" />
          ) : (
            <p className="mt-2">{code}</p>
          )}
        </div>
      )}
    </div>
  );
}
