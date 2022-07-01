import { Routes, Route } from "react-router-dom";
import "./App.css";

import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>Landing page</p>} />
      <Route path="login" element={<p>Login</p>} />
      <Route path="signup" element={<p>Signup</p>} />
      <Route path="create" element={<CreatePost />} />
    </Routes>
  );
}

export default App;
