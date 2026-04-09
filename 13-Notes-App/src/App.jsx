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
            return <div key={index} className="w-52 h-62 rounded-2xl px-4 py-8 text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover">
              <h2 className="absolute "><X size={16} strokeWidth={2.75} /></h2>
              <h1 className="text-3xl leading-tight font-bold">{item.heading}</h1>
              <p className="text-lg leading-tight font-medium mt-3">{item.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
