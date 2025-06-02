import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import HomePage from "./pages/home"
import Footer from "./components/footer"
import AboutPage from "./pages/about"
import ScrollToTop from "./components/ScrollToTop"
import ResultPage from "./pages/results"

function App() {
 

  return (
   
   <BrowserRouter>
    <ScrollToTop />
      <div>
        <Header />
          <Routes path="/*">
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path ="/results" element={<ResultPage />} />
          </Routes>
        <Footer />
      </div>
   </BrowserRouter>
  )
}

export default App
