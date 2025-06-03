import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import HomePage from "./pages/home"
import Footer from "./components/footer"
import AboutPage from "./pages/about"
import ScrollToTop from "./components/ScrollToTop"
import ResultPage from "./pages/results"
import DiscussionPage from "./pages/discussion"
import TeamPage from "./pages/team"

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
            <Route path="/discussion" element={<DiscussionPage />} />
            <Route path="/team" element={<TeamPage/>} />
          </Routes>
        <Footer />
      </div>
   </BrowserRouter>
  )
}

export default App
