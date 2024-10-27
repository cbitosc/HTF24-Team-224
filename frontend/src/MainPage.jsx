import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";

const HomePage = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate(); // Initialize navigate function

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation functions
  const goToAdminLogin = () => {
    navigate("admin/adminLogin");
  };
  const goToUserLogin = () => {
    navigate("/user/login");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/flogos/logo.jpg" alt="Seam Logo" className="h-10" />
          <h1 className="ml-5 text-purple-600 font-bold">SEAM</h1>
          <input
            type="text"
            placeholder="Search Opportunities"
            className="ml-4 px-4 py-2 border border-gray-300 rounded-full focus:outline-none hidden sm:block"
          />
        </div>
        {/* Mobile menu button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Navbar links */}
        <nav className="hidden sm:flex items-center space-x-6">
          <a
            href="#"
            className="text-gray-600 hover:text-black hover:scale-105"
          >
            Clubs
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black hover:scale-105"
          >
            Colleges
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black hover:scale-105"
          >
            Cities
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black hover:scale-105"
          >
            Students
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black hover:scale-105"
          >
            About Us
          </a>
        </nav>
        <div className="hidden sm:flex items-center space-x-4">
          <button
            onClick={goToAdminLogin}
            className="bg-purple-500 text-white px-4 py-2 rounded-full hover:scale-105 hover:bg-purple-700 transition duration-500"
          >
            Host
          </button>
          <button
            onClick={goToUserLogin}
            className="bg-yellow-300 text-white px-4 py-2 rounded-full hover:scale-105 hover:bg-yellow-500 transition duration-500"
          >
            Student
          </button>
        </div>
      </header>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-2 py-4">
            <a
              href="#"
              className="text-gray-600 hover:text-black hover:scale-105"
            >
              Clubs
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black hover:scale-105"
            >
              Colleges
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black hover:scale-105"
            >
              Cities
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black hover:scale-105"
            >
              Students
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black hover:scale-105"
            >
              About Us
            </a>
            <button
              onClick={goToAdminLogin}
              className="bg-purple-500 text-white px-4 py-2 rounded-full w-full hover:scale-105 hover:bg-purple-700 transition duration-500"
            >
              HOST
            </button>
            <button
              onClick={goToUserLogin}
              className="bg-yellow-300 text-white px-4 py-2 rounded-full w-full hover:scale-105 hover:bg-yellow-500 transition duration-500"
            >
              Student
            </button>
          </nav>
        </div>
      )}

      {/* Main Section */}
      <main className="py-12">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            Student Event{" "}
            <span className="text-purple-600">Attendance Management</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Effortlessly track, manage, and enhance student engagement at events
            with streamlined attendance solutions.
          </p>
          <div className="flex justify-center">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Complete your profile
            </button>
          </div>
        </section>

        {/* Card Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl lg:mx-auto mx-5">
          <div className="bg-green-200 p-6 rounded-lg shadow hover:scale-110 hover:bg-green-400 transition duration-500">
            <h2 className="text-xl font-semibold">Clubs</h2>
            <p className="text-gray-600">Gain Practical Experience</p>
          </div>
          <div className="bg-pink-200 p-6 rounded-lg shadow hover:scale-110 hover:bg-pink-300 transition duration-500">
            <h2 className="text-xl font-semibold">Colleges</h2>
            <p className="text-gray-600">Expand Knowledge Base</p>
          </div>
          <div className="bg-purple-200 p-6 rounded-lg shadow hover:scale-110 hover:bg-purple-400 transition duration-500">
            <h2 className="text-xl font-semibold">Students</h2>
            <p className="text-gray-600">Refine Skills Daily</p>
          </div>
          <div className="bg-yellow-200 p-6 rounded-lg shadow hover:scale-110 hover:bg-yellow-400 transition duration-500">
            <h2 className="text-xl font-semibold">About Seam</h2>
            <p className="text-gray-600">Battle For Excellence</p>
          </div>
          <div className="bg-orange-200 p-6 rounded-lg shadow hover:scale-110 hover:bg-orange-400 transition duration-500">
            <h2 className="text-xl font-semibold">Mentorship</h2>
            <p className="text-gray-600">Guidance From Top Mentors</p>
          </div>
          <div className="bg-blue-200 p-6 rounded-lg shadow hover:scale-110 hover:bg-blue-400 transition duration-500">
            <h2 className="text-xl font-semibold">Cities</h2>
            <p className="text-gray-600">Explore Diverse Careers</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-left">
            <p className="text-gray-500 text-xl font-semibold mb-10">
              Trusted by Industry veterans
            </p>
          </div>
          <div className="relative overflow-hidden w-full max-w-xl mb-10">
            <div className="flex animate-slide">
              <img
                src="flogos/LogoCOSC.png"
                alt="Loreal"
                className="h-16 mx-6 hover:scale-110 transition duration-500"
              />
              <img
                src="/flogos/AstraLOGO.jpg"
                alt="Walmart"
                className="h-16 mx-6 hover:scale-110 transition duration-500"
              />
              <img
                src="/flogos/GDSClogo.jpg"
                alt="Wipro"
                className="h-16 mx-6 hover:scale-110 transition duration-500"
              />
              <img
                src="/flogos/ELClogo.jpg"
                alt="Amazon"
                className="h-16 mx-6 hover:scale-110 transition duration-500"
              />
              <img
                src="/flogos/EWBlogo.jpg"
                alt="Flipkart"
                className="h-16 mx-6 hover:scale-110 transition duration-500"
              />
            </div>
          </div>
        </div>
        <div>
          <About />
        </div>
      </footer>
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and description */}
          <div>
            <img
              src="/flogos/logo.jpg"
              alt="Mental Health Foundation"
              className="h-16 mb-4"
            />
            <p className="text-gray-400">
              An intuitive platform designed to streamline attendance tracking
              at student events. This system simplifies the process of logging
              attendance, enabling organizers to monitor student engagement
              accurately and in real-time.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com"
                  className="hover:underline text-gray-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  className="hover:underline text-gray-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  className="hover:underline text-gray-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  className="hover:underline text-gray-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; 2024 Student Event Attendance Management. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
