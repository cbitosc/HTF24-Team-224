import { useState } from "react";
import DP from "/blogos/Akhil.png";

const SamplePage = () => {
  const [profileData, setProfileData] = useState({
    firstName: "Akhil",
    middleName: "Kumar",
    lastName: "Narayanam",
    dob: "06 December, 2002",
    gender: "Male",
    maritalStatus: "Married",
    rollNo: "160121749050",
    joiningYear: "2021",
    graduationYear: "2025",
    organization: "CBIT",
    designation: "Student",
    email: "akhil@b.com",
    webLinks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
        Edit Profile
      </h1>
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src={DP}
              alt="Profile"
              className="h-24 w-24 md:h-32 md:w-32 object-cover rounded-full"
            />
            <div className="mt-4 flex justify-center md:justify-start">
              <button className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-300">
                Edit
              </button>
            </div>
          </div>
          <div className="flex-grow grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Middle Name
              </label>
              <input
                type="text"
                name="middleName"
                value={profileData.middleName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="text"
                name="dob"
                value={profileData.dob}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                value={profileData.gender}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Marital Status
              </label>
              <select
                name="maritalStatus"
                value={profileData.maritalStatus}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              >
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Roll No.
            </label>
            <input
              type="text"
              name="rollNo"
              value={profileData.rollNo}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Joining Year *
            </label>
            <input
              type="text"
              name="joiningYear"
              value={profileData.joiningYear}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Graduation Year *
            </label>
            <input
              type="text"
              name="graduationYear"
              value={profileData.graduationYear}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Organisation
            </label>
            <input
              type="text"
              name="organization"
              value={profileData.organization}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={profileData.designation}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Web Links / IMs
            </label>
            <input
              type="text"
              name="webLinks"
              value={profileData.webLinks}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="mt-6 md:mt-8 flex justify-center">
          <button className="px-4 py-2 md:px-6 md:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;
