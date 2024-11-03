import React, { useState } from "react";
import seam from "/flogos/logo.jpg";

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    admission_no: "",
    roll_no: "",
    branch: "",
    semester: "",
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      const response = await fetch("http://localhost:8080/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-8">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
        <div className="flex flex-col items-center mb-8">
          <img src="/flogos/logo.jpg" alt="Seam" className="h-14 mb-4" />
          <h2 className="text-2xl font-bold text-purple-700">Sign Up</h2>
        </div>
        <p className="text-center text-gray-600 mb-6">
          Enter your credentials to continue
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            />
          </div>
          <div className="mb-5 relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-600 hover:text-gray-800"
            >
              {passwordVisible ? "🙈" : "👁"}
            </button>
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="admission_no"
              id="admission_no"
              value={formData.admission_no}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              placeholder="Enter your admission number"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="roll_no"
              id="roll_no"
              value={formData.roll_no}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              placeholder="Enter your roll number"
              required
            />
          </div>
          <div className="mb-5">
            <select
              name="branch"
              id="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              required
            >
              <option value="" disabled>
                Select your branch
              </option>
              <option value="CSE">Computer Science Engineering</option>
              <option value="ECE">
                Electronics and Communication Engineering
              </option>
              <option value="ME">Mechanical Engineering</option>
              <option value="CE">Civil Engineering</option>
            </select>
          </div>
          <div className="mb-5">
            <select
              name="semester"
              id="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              required
            >
              <option value="" disabled>
                Select your semester
              </option>
              <option value="1">1st Semester</option>
              <option value="2">2nd Semester</option>
              <option value="3">3rd Semester</option>
              <option value="4">4th Semester</option>
              <option value="5">5th Semester</option>
              <option value="6">6th Semester</option>
              <option value="7">7th Semester</option>
              <option value="8">8th Semester</option>
            </select>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label className="ml-2 text-gray-700 text-sm">
              Agree with{" "}
              <a href="#" className="text-purple-600 underline">
                Terms
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-6">
          <a
            href="/"
            className="text-gray-600 underline text-sm hover:text-gray-800"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
