import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutPage from './Layouts/LayoutPage'
import Auth from './pages/Auth'
import HomePage from './Pages/HomePage'
import Scannerpage from './Pages/ScannerPage'
import NewsPage from './Pages/NewsPage'
import About from './Pages/AboutPage'
import AboutPage from './Pages/AboutPage'

function App() {
  return (
    <BrowserRouter>

      <LayoutPage>

        <Routes>
  
          <Route path='/' element={<HomePage />} />

          <Route path='/Scanner' element={<Scannerpage />} />

          <Route path='/News' element={<NewsPage />} />

          <Route path='/About' element={<AboutPage />} />

           <Route path='/login' element={<Auth />} />

        </Routes>

      </LayoutPage>

    </BrowserRouter>
  )
}

export default App