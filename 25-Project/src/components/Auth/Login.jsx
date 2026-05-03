const Login = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-white">
      <div className="border-2 border-red-600 p-20 rounded-2xl">
        <form
        onSubmit={()=>{

        }} 
        className="flex flex-col items-center justify-center">
          <input  className="border-2 border-emerald-600 bg-transparent py-4 px-5 text-xl outline-none rounded-full placeholder:text-gray-400" type="email" placeholder="Enter your email" />
          <input 
          className="border-2 border-emerald-600 bg-transparent py-4 px-5 text-xl outline-none rounded-full placeholder:text-gray-400 mt-3"
          type="password" placeholder="Enter password" />
          <button 
          onClick={()=>{

          }}
          className="text-white outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full mt-5">Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
