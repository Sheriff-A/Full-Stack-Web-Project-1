import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import { App } from './App' // The Application
import * as serviceWorker from './serviceWorker'
import { Navbar } from './components/Navbar/navbar'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
