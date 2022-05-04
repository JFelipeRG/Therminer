import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'

const Profile = React.lazy(() => import('./pages/profile'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='profile' element={<React.Suspense fallback={<>...</>}><Profile /></React.Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
