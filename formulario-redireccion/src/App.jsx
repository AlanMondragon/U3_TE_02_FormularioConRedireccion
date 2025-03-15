import './App.css'
import Form from './components/Formulario'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './components/Login'

function App() {

  return(
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
  
}

export default App
