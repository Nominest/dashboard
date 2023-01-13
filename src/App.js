import { Routes, Route } from "react-router-dom";
import SlideMenu from "./components/SlideMenu";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./style/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app">
        <SlideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
