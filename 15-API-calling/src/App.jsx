const App = () => {
  const getData=()=>{
    console.log("data is fetched...!")
  }
  return (
    <div className="bg-black h-screen p-5">
      <button onClick={()=>{
        getData();
      }} className="bg-red-500 text-white px-5 py-3 rounded">Get data</button>
    </div>
  )
}

export default App
