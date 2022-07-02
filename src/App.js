import { Routes, Route } from "react-router-dom";
import "./App.css";

import CreatePost from "./pages/CreatePost";
import Suscribe from "./pages/Suscribe";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>Landing page</p>} />
      <Route path="suscribe" element={<Suscribe />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<p>Signup</p>} />
      <Route path="create" element={<CreatePost />} />
    </Routes>
  );
}

export default App;
