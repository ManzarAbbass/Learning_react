const App = () => {
  return (
    <div className="bg-black h-screen text-white">
      <div>
      <form className="flex flex-col gap-4 p-10">

        <input 
        type="text"
        placeholder="Enter Notes Heading"
        className="px-5 py-2 border-2 rounded"
        />
        <textarea 
        placeholder="Enter Details"
        name=""
        id=""
        className="px-5 py-2 border-2 rounded"
         ></textarea>
         <button className="bg-white text-black px-5 py-2 rounded">Add Note</button>
      </form>
      </div>
      <div></div>
    </div>
  )
}

export default App
