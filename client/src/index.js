import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';

console.log(process.env.REACT_APP_BASE_URL);

export const Context = createContext(null);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Context.Provider value={{
//     user: new UserStore()
//   }}>
//     <App />
//   </Context.Provider>
// );

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
    }}
  >
    <App />
  </Context.Provider>
);
