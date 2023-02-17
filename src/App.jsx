import './App.css'
import router from './app/index.jsx'
import {RouterProvider} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Modal from './components/Modal'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './components/auth/Registration'
import Email from './components/auth/Email'

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider
        router={router}
      />
      <BrowserRouter>
            <Routes>
              <Route>
                  <Route path="/email" element={<Email />} />
              </Route>
            </Routes>
          </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
