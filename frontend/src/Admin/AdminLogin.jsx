import React, { useState } from "react";
import seam from "/flogos/logo.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [club, setClub] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Log the email and password to verify the inputs
    console.log("Email:", club);
    console.log("Password:", password);

    try {
      const response = await fetch("http://localhost:8080/adminLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ club, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(response);
      const data = await response.text();
      console.log("Success:", data);

      if (data == "AuthenticationPass") {
        navigate(`/admin/${club}`);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error response here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-sm sm:max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/flogos/logo.jpg"
            alt="Seam"
            className="h-12 sm:h-14 mb-4"
          />
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-600">
            Login
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              ClubID
            </label>
            <input
              type="text"
              id="club"
              value={club}
              onChange={(e) => setClub(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter Club Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12h.01M12 15h.01M9 12h.01M12 9h.01M17 16v1M17 16v1a2 2 0 01-2 2h-6a2 2 0 01-2-2v-1M15 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Sign IN
          </button>
          <div className="flex justify-between items-center mt-4 text-sm">
            <a href="/register" className="text-purple-600 hover:underline">
              Create Account
            </a>
            <a href="#" className="text-gray-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
        <div className="mt-6 text-center text-gray-500 text-sm">
          Student Event Attendance Management{" "}
          <a
            href="#"
            className="text-purple-600 underline hover:text-indigo-500"
          >
            know More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
