import React from "react";
import Cookies from "universal-cookie";
// import { useNavigate } from "react-router-dom";

function Signoutbutton() {
  const cookies = new Cookies();
  function signOut() {
    cookies.remove("userInfo");
  }

  return (
    <a
      href="/signin"
      onClick={signOut}
      className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
        <div className="flex flex-row align-middle items-center justify-center">
          <span>Log out</span>
        </div>
      </span>
    </a>
  );
}

export default Signoutbutton;
