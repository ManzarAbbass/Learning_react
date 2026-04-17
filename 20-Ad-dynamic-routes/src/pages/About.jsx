import { useNavigate } from "react-router-dom"

const About = () => {
  const navg=useNavigate()
  return (
    <div>
      <button 
      onClick={()=>{
        navg('/')
      }} 
      className="bg-pink-800 px-5 py-2 rounded m-2 cursor-pointer">Return to home</button>
      <button
      onClick={()=>{
        navg(-1)
      }}
      className="bg-pink-800 px-5 py-2 rounded m-2 cursor-pointer"
      >Back</button>
      <h1 className="absolute top-[30%] left-[50%] transform -translate-x-1/2 translate-y-1/2 text-8xl underline">About Page</h1>
    </div>
  )
}

export default About
