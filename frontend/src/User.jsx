import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Admind } from "./User/Exp";
import Login from "./User/Login";
import Allclubs from "./User/allclubs";
import UserEvents from "./User/userevents";
import Signup from "./User/Register";

function App() {
  console.log("user jsx");
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Admind />} />
        {/* <Route path="/home/" element={<Admind />} />
        <Route path="/Allclubs" element={<Allclubs />} />
        <Route path="/myevent" element={<UserEvents />} />
         */}
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
