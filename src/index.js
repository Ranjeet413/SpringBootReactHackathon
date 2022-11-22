import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userReducer from './features/userSlice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'


// const UserContext = createContext()

const store = configureStore({ 
  reducer:{user: userReducer},
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  })
 })

 

//  user: userReducer
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UserContext.Provider value={user}> */}
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    {/* </UserContext.Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
