import { useState } from "react";

const Login = ( {handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (evtObj) => {
    evtObj.preventDefault();
    setEmail("");
    setPassword("");
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center text-white">
      <div className="border-2 border-red-600 p-20 rounded-2xl">
        <form
          onSubmit={(e) => {
            handleLogin(email,password)
            submitHandler(e)
          }}
          className="flex flex-col items-center justify-center">
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
            className="border-2 border-emerald-600 bg-transparent py-4 px-5 text-xl outline-none rounded-full placeholder:text-gray-400"
            value={email}
            type="email"
            placeholder="Enter your email" />
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            className="border-2 border-emerald-600 bg-transparent py-4 px-5 text-xl outline-none rounded-full placeholder:text-gray-400 mt-3"
            value={password}
            type="password"
            placeholder="Enter password" />
          <button
            onClick={() => {

            }}
            className="text-white outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full mt-5 w-full">Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
