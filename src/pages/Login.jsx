import { useState } from "react";
import Footer from "../components/Footer";
import "../style/login.css";

export default function Login(prop) {
  const { loginCheck } = prop;
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  function loginHandler(e) {
    e.preventDefault();
    setUserName(e.target.userName.value);
    setPassword(e.target.password.value);
    loginCheck(userName, password);
  }

  return (
    <div className="login">
      <form onSubmit={loginHandler}>
        <input
          type="text"
          name="userName"
          placeholder="И-мэйл эсвэл утасны дугаар"
        />
        <input type="text" name="password" placeholder="Нууц үг" />
        <br />
        <button type="submit">Нэвтрэх</button>
        <br />
        <button>Бүртгүүлэх</button>
      </form>
      <Footer />
    </div>
  );
}
