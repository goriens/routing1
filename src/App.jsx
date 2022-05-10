import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Components/About";
import { Categories } from "./Components/Categories";
import { DataDetails } from "./Components/DataDetails";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="categories/:id" element={<DataDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
