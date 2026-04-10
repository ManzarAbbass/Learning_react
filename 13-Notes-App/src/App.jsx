import {X} from "lucide-react"
import { useState } from "react"
const App = () => {
  const [cardheading, setHeading] = useState("");
  const [carddetails, setDetails] = useState("");
  const [notes, setNotes] = useState([]);
  const submitHandler = (evtObj) => {
    evtObj.preventDefault();
    setNotes(prev => [...prev, { "heading": cardheading, "details": carddetails }]);
    setHeading("");
    setDetails("");
  }
  const getHeading = (evtObj) => {
    setHeading(evtObj.target.value);
  }
  const getDetails = (evtObj) => {
    setDetails(evtObj.target.value)
  }
  const deleteNote = (idx) => {
    setNotes(prev=> prev.filter((item,index)=> index!==idx))
  }
  return (
    <div className="bg-black h-screen text-white lg:flex">
      <form onSubmit={submitHandler} className="flex flex-col gap-4 p-10 lg:w-1/2">
        <h2 className="text-3xl font-bold">Add Notes</h2>
        <input
          onChange={getHeading}
          type="text"
          placeholder="Enter Notes Heading"
          value={cardheading}
          className="px-5 py-2 border-2 rounded outline-none font-medium w-full"
        />
        <textarea
          onChange={getDetails}
          value={carddetails}
          placeholder="Enter Details"
          name=""
          id=""
          className="px-5 py-2 border-2 rounded outline-none  h-40 font-medium w-full flex items-start flex-row"
        ></textarea>
        <button className="bg-white active:bg-gray-500 hover:scale-50 text-black px-5 py-2 rounded w-full">Add Note</button>
      </form>
      <div className="p-10 bg-black lg:border-l-2 h-full lg:w-1/2">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-full">
          {notes.map(function (item, index) {
            return <div key={index} className="flex flex-col justify-between items-start w-40 h-52 rounded-xl pt-9 pb-4 px-4 text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover">
              <div>
              <h3 className="text-lg leading-tight font-bold">{item.heading}</h3>
              <p className="leading-tight text-gray-500 text-sm font-medium mt-3">{item.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(index)
              }} className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs text-white rounded">Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
