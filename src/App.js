
import { useSelector } from 'react-redux';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Privateroute from './components/PrivateRoute';
import Sidebar from './components/Sidebar';
import SignUpPage from './components/SignUpPage';
import Account from './pages/Account';
import Transfer from './pages/Transfer';




function App() {

  const user = useSelector(state => state.user.value)
  var loginStatusValidation = user.loginStatus


  console.log(loginStatusValidation);



  return (
    <div>
    
      <Routes>      

       <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route element ={<Privateroute />} >
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        </Routes>

    
        <Routes>        
          <Route path="/account" element={<Account />} />
          <Route path="/transfer" element={<Transfer />} />
          
        </Routes>
        
   
 




    </div>
  );
}

export default App;
