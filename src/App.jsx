import { useState } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Footer from './components/Layout/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Header />
      <Main />
      <Footer />
      

      
    </div>
  )
}

export default App
