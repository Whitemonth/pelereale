import "./App.css";
import { Routes, Route } from "react-router-dom";

import Goods from "./pages/Goods";
import About from "./pages/About";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/goods" element={<Goods />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
