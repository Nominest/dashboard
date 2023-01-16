import { Routes, Route } from "react-router-dom";
import SlideMenu from "./components/SlideMenu";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./style/app.css";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <div className="app">
        {/* <Header />
        <SlideMenu /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <SlideMenu />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
