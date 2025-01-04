import { Link } from "react-router-dom";
import { LOGO_url } from "../Utils/Constants";
import { useState, useContext } from "react";
import useOnline from "../Hooks/useOnline";

import UseContext from "../Utils/UseContext";

const Header = () => {
  const [btnTextReact, setBtnTextReact] = useState("login");
  const onlineStatus = useOnline();

  const { loggedinuser } = useContext(UseContext);

  return (
    <div className="flex justify-between items-center bg-pink-100 sm:bg-yellow-100 lg:bg-green-100 shadow-lg">
      <img src={LOGO_url} className="w-48" />

      <ul className="flex  items-center ">
        <li className="px-4">online:{onlineStatus ? "🟢" : "🔴"}</li>
        <li className="px-4">
          <Link to="/">home</Link>
        </li>
        <li className="px-4">
          <Link to="/about">about</Link>
        </li>
        <li className="px-4">
          <Link to="/contact"> contact</Link>
        </li>
        <li className="px-4">
          <Link to="/Recepies"> Recepies</Link>
        </li>
        <li className="px-4">
          <button
            className="bg-gray-300 px-4 py-2 rounded-lg"
            onClick={() => {
              if (btnTextReact === "Login") {
                setBtnTextReact("Logout");
              } else setBtnTextReact("Login");
            }}
          >
            {btnTextReact}
          </button>
        </li>
        <li className="px-4">{loggedinuser}</li>
      </ul>
    </div>
  );
};
export default Header;
