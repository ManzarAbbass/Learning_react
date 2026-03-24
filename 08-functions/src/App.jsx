const App = () => {
  function BtnClick(){
    console.log("Button is Clicked")
  }
  function Entermouse(){
    console.log("Mouse is Enter")
  }
  return (
    <div className="flex flex-col items-start">
      <button onMouseEnter={Entermouse} onClick={BtnClick} className="bg-black py-5 px-8 text-white mt-1">Click Me</button>
      {/* <button onMouseEnter={Entermouse} className="bg-orange-400 py-5 px-8 text-white mt-1">hover Me</button> */}
    </div>
  )
}

export default App
