import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import HomePage from "./pages/home"
import Footer from "./components/footer"

function App() {
 

  return (
   
   <BrowserRouter>
      <div>
        <Header />
          <Routes path = "/*">
            <Route path ="/" element={<HomePage/>} />
          </Routes>
        <Footer />
      </div>
   </BrowserRouter>
  )
}

export default App
