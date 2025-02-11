"use client";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isRegisterPopupVisible, setRegisterPopupVisible] = useState(false); // To control the register popup visibility

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = () => setRememberMe(!rememberMe);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleRegisterClick = () => {
    setRegisterPopupVisible(true); // Show the register popup
  };

  const handleCloseRegisterPopup = () => {
    setRegisterPopupVisible(false); // Close the register popup
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-10 rounded-lg shadow-xl w-4/6 sm:w-3/5 md:w-2/5 lg:w-2/6 xl:w-2/7 animate-fadeIn">
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="block text-left text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="w-full p-3 mb-3 border border-gray-300 rounded-md"
          />

          <label
            htmlFor="password"
            className="block text-left text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="w-full p-3 mb-3 border border-gray-300 rounded-md"
          />

          <div className="flex justify-between items-center mt-4">
            <label htmlFor="remember-me" className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="mr-2"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full mt-6 p-3 bg-indigo-600 text-white rounded-md hover:opacity-90"
          >
            Log In
          </button>
          <button
            type="button"
            className="w-full mt-3 p-3 bg-blue-600 text-white rounded-md hover:opacity-90"
          >
            Sign in with Google
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <button onClick={handleRegisterClick} className="text-red-600 hover:underline">
            Register here
          </button>
        </div>
      </div>

      {/* Register Popup */}
      {isRegisterPopupVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-10 rounded-lg shadow-xl w-4/6 sm:w-3/5 md:w-2/5 lg:w-2/6 xl:w-2/7 animate-fadeIn">
            <h1 className="text-2xl font-semibold mb-6 text-center">Sign Up</h1>
            <div className="flex justify-center space-x-4">
              <button
                className="w-32 p-3 bg-green-600 text-white rounded-md hover:opacity-90"
                onClick={() => alert("Sign up as vendor")}
              >
                Sign Up as Vendor
              </button>
              <button
                className="w-32 p-3 bg-blue-600 text-white rounded-md hover:opacity-90"
                onClick={() => alert("Sign up as user")}
              >
                Sign Up as User
              </button>
            </div>

            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <button onClick={handleCloseRegisterPopup} className="text-red-600 hover:underline">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
