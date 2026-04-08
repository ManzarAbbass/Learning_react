import { useState } from "react"
const App = () => {
  const [cardheading, setHeading] = useState("");
  const [carddetails, setDetails] = useState("");
  const submitHandler=(evtObj)=>{
    evtObj.preventDefault();
  }
  const getHeading=(evtObj)=>{
    setHeading(evtObj.target.value);
  }
  const getDetails=(evtObj)=>{
    console.log(evtObj.target.value);
  }
  return (
    <div className="bg-black h-screen text-white">
      <div>
      <form onSubmit={submitHandler} className="flex justify-between items-start p-10">
        <div className="flex flex-col w-1/2 items-start gap-4">
        <h2>Notes Form</h2>
        <input 
        onChange={getHeading}
        type="text"
        placeholder="Enter Notes Heading"
        className="px-5 py-2 border-2 rounded outline-none font-medium w-full"
        value={cardheading}
        />
        <textarea
        onChange={getDetails} 
        placeholder="Enter Details"
        name=""
        id=""
        className="px-5 py-2 border-2 rounded outline-none  h-40 font-medium w-full flex items-start flex-row"
         ></textarea>
         <button className="bg-white text-black px-5 py-2 rounded w-full">Add Note</button>
         </div>
      </form>
      </div>
      <div>
        <h2>Notes Cards</h2>
        <div className="bg-white w-60">
        <h3>Hello</h3>
        <p>This is a simple note.</p>
        </div>
      </div>
    </div>
  )
}

export default App
