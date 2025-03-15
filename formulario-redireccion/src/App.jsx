import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login';

function App() {

  return (
    <>
      <Router>
            <Routes>
                <Route index element={<Login/>}/>  
            </Routes>
        </Router>
    </>
  )
}

export default App
