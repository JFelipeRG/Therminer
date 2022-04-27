import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/home'
import User from './routes/user'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='user' element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
