import React from 'react';
import logo from '../assets/kiddie.png';
import doctorImage from '../assets/doctor.jpg';

const RegistrationPage = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center backdrop-blur-lg"
      style={{ backgroundImage: `url(${doctorImage})` }}
    >
      {/* Logo at the top-left corner with responsive sizing */}
      <div className="absolute top-0 left-0 p-4">
        <img
          src={logo}
          alt="logo"
          className="w-32 h-28 md:w-44 md:h-40 lg:w-56 lg:h-52 object-contain" // Responsive logo sizes
        />
      </div>

      {/* Centered Registration Form */}
      <div className="relative flex flex-col items-center w-full max-w-lg p-6 bg-white border-2 border-gray-900 rounded-lg shadow-lg mt-20 lg:mt-20">
        <h1 className="text-2xl font-bold text-center mb-4">Create an Account!</h1>

        {/* Registration Form */}
        <form>
          {/* First Row: Fullname, Email, and Contact Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 w-full">
            {/* Full Name Field */}
            <div>
              <label className="w-full text-left text-sm font-semibold mb-1">Fullname</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Fullname"
                className="w-full p-3 border-2 rounded-full border-gray-500 bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="w-full text-left text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border-2 rounded-full border-gray-500 bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Contact Number Field */}
            <div className="md:col-span-2">
              <label className="w-full text-left text-sm font-semibold mb-1">Contact Number</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                placeholder="Contact Number"
                className="w-full p-3 border-2 rounded-full border-gray-500 bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          {/* Second Row: Password and Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 w-full">
            {/* Password Field */}
            <div>
              <label className="w-full text-left text-sm font-semibold mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border-2 rounded-full border-gray-500 bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                minLength={8} // Minimum of 8 characters
                maxLength={12} // Maximum of 12 characters
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="w-full text-left text-sm font-semibold mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full p-3 border-2 rounded-full border-gray-500 bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                minLength={8} // Minimum of 8 characters
                maxLength={12} // Maximum of 12 characters
              />
            </div>
          </div>

          {/* User Type Field */}
          <div className="mb-4 w-full">
            <label className="w-full text-left text-sm font-semibold mb-1">User Type</label>
            <select
              id="userType"
              name="userType"
              className="w-full p-3 border-2 rounded-full border-gray-500 bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="" disabled selected>Select User Type</option>
              <option value="Admin">Admin</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Guardian">Guardian</option>
            </select>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-[#1ED754] rounded-full text-xl font-semibold hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
