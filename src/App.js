import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Input from "./Input";
import SignIn from "./SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Input />} />
        </>
      </Routes>
    </Router>
  );
}

export default App;
