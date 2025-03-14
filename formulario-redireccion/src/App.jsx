import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Formulario from './components/Formulario'

function App() {

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<Formulario/>}/>  
            </Routes>
        </Router>
    </>
  )
}

export default App
