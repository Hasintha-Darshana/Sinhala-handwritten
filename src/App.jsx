import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import HomePage from "./pages/home"
import Footer from "./components/footer"
import AboutPage from "./pages/about"

function App() {
 

  return (
   
   <BrowserRouter>
      <div>
        <Header />
          <Routes path="/*">
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        <Footer />
      </div>
   </BrowserRouter>
  )
}

export default App
