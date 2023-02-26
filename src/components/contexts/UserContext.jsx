//loginhandler logouthandler users
import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      await axios
        .get("http://localhost:2500/home/user")
        .then((response) => setCurrentUser(response.data))
        .catch(() => console.log("user"));
    };
    fetchUsers();
  }, []);

  // function loginCheck(userName, password) {
  //   console.log(currentUser);
  //   currentUser.find((user) => {
  //     if (user.userName === userName && user.password === password) {
  //       setCurrentUser(user);
  //       setLoggedIn(true);
  //       localStorage.setItem("currentUser", JSON.stringify(currentUser));
  //       console.log("success", user);
  //     }
  //   });
  // }
  function loginCheck(userName, password) {
    console.log(currentUser);
    if (currentUser.length > 0) {
      currentUser.find((user) => {
        if (user.userName === userName && user.password === password) {
          setCurrentUser(user);
          setLoggedIn(true);
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          console.log("success", user);
        }
      });
    }
  }
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, loginCheck }}>
      {children}
    </UserContext.Provider>
  );
}
