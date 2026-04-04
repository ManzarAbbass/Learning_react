const App = () => {
  const submitHandler=(evtobj)=>{
    // stop the default behaviour of the form which is to refresh the page
    evtobj.preventDefault();
    console.log(evtobj.target[0].value);
  }
  return (
    <div className="bg-black h-screen">
      <form onSubmit={(e)=> {
        submitHandler(e)
      }}>
        <input className="py-10 px-20 border border-white text-white text-[15px] mx-4" type="text" placeholder="Enter Your Name" />
        <button className="py-5 px-10 bg-gray-700 border border-white rounded-2xl">Submit</button>
      </form>
    </div>
  )
}

export default App
