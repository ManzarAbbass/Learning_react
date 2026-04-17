import { useNavigate } from "react-router-dom"

const About = () => {
  const navg=useNavigate()
  const btnClick=()=>{
    navg('/')
  }
  return (
    <div>
      <button 
      onClick={()=>{
        btnClick()
      }} 
      className="bg-pink-800 px-5 py-2 rounded m-2 cursor-pointer">Return to home</button>
      <h1 className="absolute top-[30%] left-[50%] transform -translate-x-1/2 translate-y-1/2 text-8xl underline">About Page</h1>
    </div>
  )
}

export default About
