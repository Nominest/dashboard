// import { Route, Routes, NavLink } from "react-router-dom";
// import "../../style/substyle/navbar.css";
// import Login from "../../pages/Login";

// export default function Navbar() {
//   let activeClassName = "";
//   return (
//     <header>
//       <div>
//         <img src="./logo.png" alt="" />
//       </div>
//       <div className="searchbar">
//         <input type="text" placeholder="Search anything" />
//         <button>
//           <a href="">Search</a>
//         </button>
//       </div>
//       <div className="signin">
//         <ul>
//           <li>
//             <NavLink
//               to="signin"
//               className={({ isActive }) => isActive && activeClassName}
//             >
//               Sign In
//             </NavLink>
//           </li>
//           <li>
//             <a href="">Favourites</a>
//           </li>
//         </ul>
//       </div>
//       <Routes>
//         <Route path="/signin" element={<Login />} />
//       </Routes>
//     </header>
//   );
// }
