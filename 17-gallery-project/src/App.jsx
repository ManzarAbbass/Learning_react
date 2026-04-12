const App = () => {
  const fetchData=async()=>{
    // console.log("data a gya.....")
    const response=
  }
  return (
    <div className="bg-black h-screen p-4 text-white">
      <button
      onClick={()=>{
        fetchData();
      }}
        className="bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded">
        get data
      </button>
    </div>
  )
}

export default App
