import "./sass/style.scss";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Detail from "./components/pages/Detail";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:param" element={<Detail />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
