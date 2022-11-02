
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from './pages/Signup';
import Services from './pages/Services';


function App() {
  return (
    

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/services' element={<Services />}/>
    
    
    </Routes>
    </BrowserRouter>




  );
}

export default App;
