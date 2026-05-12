import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f7fb] flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 sm:p-10">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Task Manager
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to continue
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-5"
        >
          <div>
            <label className="text-sm text-gray-600 font-medium">
              Email
            </label>

            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 bg-gray-100 border border-gray-200 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-medium">
              Password
            </label>

            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              value={password}
              type="password"
              placeholder="Enter password"
              className="w-full mt-2 bg-gray-100 border border-gray-200 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold py-4 rounded-xl mt-2">
            Login
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          Employee Task Management System
        </div>
      </div>
    </div>
  );
};

export default Login;