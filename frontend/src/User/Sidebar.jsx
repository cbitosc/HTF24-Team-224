import React, { useState } from 'react';
import  Se from './Hero'; // Import your other components here
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div
    className={`fixed top-0 left-0 h-screen bg-violet-400 text-black z-40 transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } sm:translate-x-0 sm:relative sm:w-64`}
    style={{ width: '250px' }}
  >
    <div className="flex items-center justify-between p-4">
      <h2 className="text-2xl font-bold">Menu</h2>
      <button onClick={toggleSidebar} className="text-2xl sm:hidden">
        <FaTimes />
      </button>
    </div>
    <ul className="flex flex-col space-y-2 p-4">
      <li>
        <a href="#dashboard" className="block p-2 text-lg hover:bg-gray-700 rounded">
          Dashboard
        </a>
      </li>
      <li>
        <a href="#scheduled-events" className="block p-2 text-lg hover:bg-gray-700 rounded">
          Scheduled Events
        </a>
      </li>
      <li>
        <a href="#icons" className="block p-2 text-lg hover:bg-gray-700 rounded">
          Icons
        </a>
      </li>
      <li>
        <a href="#documentation" className="block p-2 text-lg hover:bg-gray-700 rounded">
          Documentation
        </a>
      </li>
    </ul>
  </div>
);

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 min-h-screen bg-gray-100      ">
        <header className="flex items-center justify-between p-4  bg-violet-400 text-black shadow-lg">
          <button onClick={toggleSidebar} className="text-2xl sm:hidden">
            <FaBars />
          </button>
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button className="text-lg">Logout</button>
        </header>
        <main className="p-4">
          <section id="scheduled-events">
            <Se />
          </section>
          <section id="icons">
            {/* <IconsPage /> */}
          </section>
          <section id="documentation">
            {/* <DocumentationPage /> */}
          </section>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
