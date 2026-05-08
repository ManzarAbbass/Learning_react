import React from 'react'

const Header = ({ data ,setUser,setLoggedInUserData}) => {
  const backToLogin= ()=>{
    localStorage.removeItem('loggedInUser')
    setUser("")
    setLoggedInUserData("")
  }
  return (
    <div className='text-white flex items-center justify-between'>
      <h1 className='text-2xl font-medium'>hello, <br /><span className='text-3xl font-semibold'>{data.firstName} 👋</span></h1>
      <button 
      onClick={()=>{
        backToLogin()
      }}
      className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-2 px-5 rounded'>Log Out</button>
    </div>
  )
}

export default Header
