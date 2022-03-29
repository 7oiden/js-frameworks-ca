import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";
import "./sass/style.scss";
import Contact from "./components/pages/Contact";
import ContentDetails from "./components/content/ContentDetails";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:param" element={<ContentDetails />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
