import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path='/register' element={<Register />}/>
       </Routes>
    </div>
  );
}

export default App;
