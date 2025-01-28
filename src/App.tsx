import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/user/Register";


function App() {
  return (
    <div className="app-container">
    <BrowserRouter>
      
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register-user" element={<Register />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
