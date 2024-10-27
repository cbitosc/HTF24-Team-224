import React, { useState, useEffect } from 'react';

const LokiTitleAnimation = () => {
  const [title, setTitle] = useState('1');
  const [color, setColor] = useState('text-green-400');
  const [iteration, setIteration] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  const titles = [
    '1', '2', '3', '4',
    'సీమ్',
    'தையல்',
    '縫い目',
    'سیون',
    'ಸನ್',
    'সিон',
    'SEAM',  // Final name
  ];

  const colors = [
    'text-red-400',
    'text-blue-400',
    'text-yellow-400',
    'text-purple-400',
    'text-pink-400',
    'text-orange-400',
    'text-teal-400',
    'text-indigo-400',
    'text-lime-400',
    'text-rose-400',
    'text-white',  // Final color
  ];

  useEffect(() => {
    if (iteration < titles.length - 1) {
      const interval = setInterval(() => {
        setIteration((prevIteration) => prevIteration + 1);
      }, 500);

      return () => clearInterval(interval);
    } else {
      setTimeout(() => {
        setShowNavbar(true);
      }, 1000); // Hold "SEAM" for 1 second
    }
  }, [iteration, titles.length]);

  useEffect(() => {
    setTitle(titles[iteration]);
    setColor(colors[iteration]);
  }, [iteration, titles, colors]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black transition-all duration-300 ease-in-out">
      {!showNavbar ? (
        <>
          <h1 className={`relative z-10 text-8xl font-bold transform transition-all duration-1000 ease-in-out ${color} ${iteration === titles.length - 1 ? 'scale-200' : ''}`}>
            {title}
          </h1>
          {/* Abstract Elements */}
          <div className={`absolute inset-0 flex justify-center items-center transition-all duration-1000 ease-in-out ${iteration === titles.length - 1 ? 'transform translate-x-full translate-y-full' : ''}`}>
            {/* Bulb Icon */}
            <svg className="absolute top-10 right-32 w-16 h-16 text-white transition-transform duration-1000 ease-in-out transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M10 22h4M7.8 7.8a6 6 0 118.4 0c.6.6.9 1.4.9 2.2a5.5 5.5 0 01-2.1 4.3h-6a5.5 5.5 0 01-2.1-4.3c0-.8.3-1.6.9-2.2z"></path>
            </svg>

            {/* Pencil Icon */}
            <svg className="absolute bottom-20 left-16 w-20 h-20 text-white transition-transform duration-1000 ease-in-out transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 9.232L14 7l-3 3 1.232 1.232 3-3zM7 15.999l4-4-1.999-2.001-4 4 1.999 2.001zM16.236 2.236a3 3 0 014.242 4.242l-1.414 1.414a3 3 0 01-4.242-4.242l1.414-1.414z"></path>
            </svg>

            {/* Magnifying Glass Icon */}
            <svg className="absolute top-32 left-20 w-12 h-12 text-white transition-transform duration-1000 ease-in-out transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"></path>
            </svg>

            {/* Gear Icon */}
            <svg className="absolute bottom-10 right-20 w-14 h-14 text-white transition-transform duration-1000 ease-in-out transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 13.75h14.5M12 4v16m5-14a7 7 0 01-5-5M7 15a7 7 0 005 5"></path>
            </svg>
          </div>
        </>
      ) : (
        <div className="relative flex flex-col items-center justify-center w-screen min-h-screen bg-black">
          <nav className="absolute top-0 flex justify-between w-full p-6 text-white">
            <div className="text-lg">About Us</div>
            <div className="flex space-x-6">
              <div className="text-lg">Student</div>
              <div className="text-lg">Admin</div>
            </div>
          </nav>
          <h1 className="relative z-10 text-9xl font-bold text-white">
            SEAM
          </h1>
          {/* About Us Section */}
          <div className="flex flex-col items-center justify-center mt-20 mb-20 text-white text-center px-6">
            <h2 className="text-4xl font-semibold mb-4">About Us</h2>
            <p className="text-xl max-w-4xl">
              We are a company dedicated to providing innovative solutions and excellent services to our customers. Our team of experts works relentlessly to bring you the best products and experiences. With a commitment to quality and customer satisfaction, we strive to make a positive impact in every project we undertake.
            </p>
          </div>
          {/* Abstract Elements */}
          <div className="absolute inset-0 flex justify-center items-center">
            {/* Bulb Icon */}
            <svg className="absolute top-10 right-10 w-24 h-24 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M10 22h4M7.8 7.8a6 6 0 118.4 0c.6.6.9 1.4.9 2.2a5.5 5.5 0 01-2.1 4.3h-6a5.5 5.5 0 01-2.1-4.3c0-.8.3-1.6.9-2.2z"></path>
            </svg>

            {/* Pencil Icon */}
            <svg className="absolute bottom-10 left-10 w-28 h-28 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 9.232L14 7l-3 3 1.232 1.232 3-3zM7 15.999l4-4-1.999-2.001-4 4 1.999 2.001zM16.236 2.236a3 3 0 014.242 4.242l-1.414 1.414a3 3 0 01-4.242-4.242l1.414-1.414z"></path>
            </svg>

            {/* Magnifying Glass Icon */}
            <svg className="absolute top-32 left-10 w-16 h-16 text-white fixed transition-transform duration-1000 ease-in-out transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"></path>
            </svg>

            {/* Gear Icon */}
            <svg className="absolute bottom-10 right-10 w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 13.75h14.5M12 4v16m5-14a7 7 0 01-5-5M7 15a7 7 0 005 5"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default LokiTitleAnimation;
