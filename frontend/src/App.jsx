import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    axios.get("http://localhost:5000/api")
      .then(res => setMessage(res.data.message))
      .catch(err => {
        console.error("AXIOS ERROR:", err)
        setMessage('Error connecting to backend')
      })
  }, [])

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>AutoDeployX</h1>
      <p>Backend says: <strong>{message}</strong></p>
    </div>
  )
}

export default App
