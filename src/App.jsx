import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutPage from './Layouts/LayoutPage'
import Auth from './pages/Auth'
import HomePage from './Pages/HomePage'
import Scannerpage from './Pages/ScannerPage'
import NewsPage from './Pages/NewsPage'
import About from './Pages/AboutPage'
import AboutPage from './Pages/AboutPage'
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import DashboardPage from "./Pages/DashboardPage";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <LayoutPage>

        <Routes>

          <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
  

          <Route path='/Home' element={<HomePage />} />

          <Route path='/Scanner' element={<Scannerpage />} />

          <Route path='/News' element={<NewsPage />} />

          <Route path='/About' element={<AboutPage />} />

        </Routes>

      </LayoutPage>

    </BrowserRouter>
  )
}

export default App