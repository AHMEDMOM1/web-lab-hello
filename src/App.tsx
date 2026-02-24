import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="card">
        <h1>Web Tasarımı ve Programlama</h1>
        <h2>LAB-1</h2>
        <div className="info">
          <p><strong>Ad Soyad:</strong> Ahmed Al Hamed</p>
          <p><strong>Öğrenci No:</strong> 225541606</p>
        </div>
        <div className="counter-section">
          <button onClick={() => setCount((count) => count + 1)}>
            Sayac: {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App