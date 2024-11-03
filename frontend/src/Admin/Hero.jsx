import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaPenNib,
  FaPalette,
  FaShapes,
  FaIcons,
  FaBook,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";

const DashboardPage = () => <div className="p-4">Dashboard Content</div>;
const TypographyPage = () => (
  <div className="p-4 min-h-screen bg-black">Typography Content</div>
);
const ColorPage = () => (
  <div className="p-4 min-h-screen bg-blue-500">Color Content</div>
);
const ShadowPage = () => (
  <div className="p-4 min-h-screen bg-red-500">Shadow Content</div>
);
const IconsPage = () => (
  <div className="p-4 min-h-screen bg-green-500">Icons Content</div>
);
const SamplePage = () => (
  <div className="p-4 min-h-screen bg-yellow-500">Sample Page Content</div>
);
const DocumentationPage = () => (
  <div className="p-4 min-h-screen bg-teal-500">Documentation Content</div>
);

const Hero = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <header className="bg-white shadow flex items-center justify-between p-4 w-full">
          <div className="flex items-center space-x-2">
            <FaBars className="cursor-pointer" onClick={toggleSidebar} />
            <img src="SEAM.png" alt="Logo" className="w-16 h-16" />
            <div className="text-2xl font-bold">
              Student Event Attendance Management
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 rounded-full px-4 py-2 outline-none w-96"
            />
            <button className="flex items-center space-x-2 text-red-600">
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </header>

        <div className="flex flex-1">
          {/* Sidebar */}
          <aside
            className={`bg-gray-100 p-4 space-y-6 transition-all duration-300 ${
              isSidebarOpen ? "block" : "hidden"
            } w-64 flex-shrink-0`}
          >
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="flex items-center space-x-2 text-purple-700 font-bold hover:bg-purple-200 rounded-lg p-2"
                  >
                    <FaTachometerAlt />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className="text-sm uppercase text-gray-500">Utilities</li>
                <li>
                  <Link
                    to="/adminet/"
                    className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2"
                  >
                    <FaPenNib />
                    <span>My Events</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/color"
                    className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2"
                  >
                    <FaPalette />
                    <span>Clubs</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shadow"
                    className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2"
                  >
                    <FaShapes />
                    <span>Attendance</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2"
                  >
                    <FaIcons />
                    <span>About SEAM</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sample"
                    className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2"
                  >
                    <FaBook />
                    <span>Sample Page</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/documentation"
                    className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2"
                  >
                    <FaBook />
                    <span>Documentation</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <main className="flex-1 p-4 space-y-4">
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/typograp" element={<TypographyPage />} />
                <Route path="/color" element={<ColorPage />} />
                <Route path="/shadow" element={<ShadowPage />} />
                <Route path="/icons" element={<IconsPage />} />
                <Route path="/sample" element={<SamplePage />} />
                <Route path="/documentation" element={<DocumentationPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
