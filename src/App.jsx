import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Header from "./components/Header/Header"
import Pages from "./components/Pages/Pages"
import Menu from "./components/Menu/Menu"
import Table from "./components/Table/Table"
import './app.css'

function App() {

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
