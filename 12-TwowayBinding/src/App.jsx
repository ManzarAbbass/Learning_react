// Two way Binding 
// React me two-way binding ka matlab hai:
// input field ki value state se control hoti hai (value={Title})
// aur jab user input change karta hai to onChange ke through state update hoti hai
// is tarah UI aur state dono sync me rehte hain


import { useState } from "react";
const App = () => {
  const [Title, setTitle] = useState("");
  const submitHandler=(evtobj)=>{
    // stop the default behaviour of the form which is to refresh the page
    evtobj.preventDefault();
    console.log("Form submitted by : ", Title)
    setTitle("")
  }
  return (
    <div className="bg-black h-screen">
      <form onSubmit={(e)=> {
        submitHandler(e)
      }}>
        <input onChange={(e)=>{
          setTitle(e.target.value)
          // console.log(e.target.value);
        }} className="py-10 px-20 border border-white text-white text-[15px] mx-4" value={Title} type="text" placeholder="Enter Your Name" />
        <button className="py-5 px-10 bg-gray-700 border border-white rounded-2xl">Submit</button>
      </form>
    </div>
  )
}

export default App

