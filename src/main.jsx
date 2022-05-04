import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home/home'))
const Profile = React.lazy(() => import('./pages/Profile/profile'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<React.Suspense fallback={<>...</>}><Home /></React.Suspense>} />
          <Route path='profile' element={<React.Suspense fallback={<>...</>}><Profile /></React.Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
