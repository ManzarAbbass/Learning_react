import { useState } from "react"
const App = () => {
  const [cardheading, setHeading] = useState("");
  const [carddetails, setDetails] = useState("");
  const [user, setuser] = useState([]);
  const submitHandler = (evtObj) => {
    evtObj.preventDefault();
    setHeading("");
    setDetails("");
    setuser(prev => [...prev, { "heading": cardheading, "details": carddetails }]);
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
        <button className="bg-white text-black px-5 py-2 rounded w-full">Add Note</button>
      </form>
      <div className="p-10 bg-slate-800 lg:border-l-2 h-full lg:w-1/2">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-full">
          {user.map(item,index)=>{
            return (<div key={index} className="w-52 h-62 bg-white rounded-2xl" >
              <h1>{item.heading}</h1>
              <p>{item.details}</p>
            </div>)
          }}
        </div>
      </div>
    </div>
  )
}

export default App
