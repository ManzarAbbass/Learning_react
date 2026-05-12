import { useState } from 'react'

const Header = ({ data, setUser, setLoggedInUserData }) => {

  const [username, setUserName] = useState("")

  const backToLogin = () => {
    // localStorage.setItem("loggedInUser","")
    // window.location.reload()

    localStorage.removeItem('loggedInUser')
    setUser("")
    setLoggedInUserData("")
  }

  // if(data=="admin"){
  //   setUserName("Admin")
  // }else{
  //   setUserName(data.firstName)
  // }

  return (
    <div className='bg-white rounded-3xl shadow-sm border border-gray-200 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5'>

      <h1 className='text-gray-700 text-2xl md:text-3xl font-medium'>
        Hello,
        <br />

        <span className='text-3xl md:text-4xl font-bold text-gray-900'>
          {data?.firstName || "Admin"} 👋
        </span>
      </h1>

      <button
        onClick={() => {
          backToLogin()
        }}
        className='bg-red-500 hover:bg-red-600 transition-all duration-300 text-white text-lg font-medium py-3 px-6 rounded-xl shadow-md'
      >
        Log Out
      </button>

    </div>
  )
}

export default Header