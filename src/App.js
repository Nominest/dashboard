import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./style/app.css";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

// {/* <div className="App">
//   <div className="app">
//     {/* <Header />
//     <SlideMenu /> */}
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <>
//             <Header />
//             <SlideMenu />
//           </>
//         }
//       />
//       <Route path="/login" element={<Login />} />
//     </Routes>
//   </div>
// </div>; */}
