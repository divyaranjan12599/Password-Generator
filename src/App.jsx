import { useState } from 'react'
import './App.css'
import GeneratePass from './components/generatePass'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>Password Generator</h1>
        <GeneratePass />
      </div>
    </>
  )
}

export default App
