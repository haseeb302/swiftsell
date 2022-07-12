import React from "react";

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  return (
    <div className="max-w-xl mx-auto mt-32 border rounded p-8">
      <div>
        <h2 className="font-bold text-center text-5xl text-gray-800">
          Create Account
        </h2>
      </div>
      <form className="grid grid-cols-1 gap-6 mt-12">
        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-700">First Name</span>
            <input
              type="text"
              className="rounded-md block w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder=""
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Last Name</span>
            <input
              type="text"
              className="rounded-md block w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder=""
            />
          </label>
        </div>
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="text"
            className="rounded-md block w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            placeholder=""
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Phone Number</span>
          <input
            type="number"
            className="rounded-md block w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            placeholder=""
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            className="rounded-md block w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            placeholder=""
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Confirm Password</span>
          <input
            type="password"
            className="rounded-md block w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            placeholder=""
          />
        </label>
        <button className="bg-gray-900 py-2 rounded-md text-white">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
