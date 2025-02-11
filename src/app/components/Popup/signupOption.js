"use client";
import React from "react";

export default function SignupOptions({ handleClose }) {
  return (
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
          <button onClick={handleClose} className="text-red-600 hover:underline">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
