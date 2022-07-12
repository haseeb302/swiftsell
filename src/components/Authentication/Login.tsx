import React from "react";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="max-w-xl mx-auto mt-32 border p-8 rounded">
      <div>
        <h2 className="font-bold text-center text-5xl text-gray-800">
          SwiftSell
        </h2>
      </div>
      <form className="grid grid-cols-1 gap-6 mt-12">
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="text"
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
        <a className="text-cyan-500 font-bold" href="#">
          Forgot Password?
        </a>
        <button className="bg-gray-900 py-2 rounded-md text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
