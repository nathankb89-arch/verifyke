import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutPage from './Layouts/LayoutPage'
import HomePage from './Pages/HomePage'
import ScannerPage from './Pages/ScannerPage'
import NewsPage from './Pages/NewsPage'


function App() {
  return (
    <BrowserRouter>
      <LayoutPage>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Scanner' element={<ScannerPage />} />
          <Route path='/News' element={<NewsPage />} />
        </Routes>
      </LayoutPage>
    </BrowserRouter>
  )
}

export default App