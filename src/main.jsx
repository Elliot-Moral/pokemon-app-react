import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//## importaciones de librerias
//## rutas
import { HashRouter } from "react-router-dom";


//##  Estado global
import { Provider } from "react-redux";
import store from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* no importa el orden del provider */}
    <Provider store={store}> 
      <HashRouter>
          <App />
      </HashRouter>
    </Provider>
    
  </React.StrictMode>,
)
