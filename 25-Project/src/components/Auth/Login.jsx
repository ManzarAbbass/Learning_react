const Login = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-red-600">
        <form className="flex flex-col items-center justify-center">
          <input  className="border-2 border-emerald-600 bg-transparent py-4 px-5 text-xl outline-none rounded-full placeholder:text-white" type="email" placeholder="Enter your email" />
          <input 
          className="border-2 border-emerald-600 bg-transparent py-4 px-5 text-xl outline-none rounded-full placeholder:text-white mt-3"
          type="password" placeholder="Enter password" />
          <button className="text-white outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full pla">Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
