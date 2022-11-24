import { useState } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />

      
    </div>
  )
}

export default App
