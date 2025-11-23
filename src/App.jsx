import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/Register"
import "../src/App.css"

function App() {

  return (
    <>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/register"  element={<Register />} />
      </Routes>
    </>
  )
}

export default App
