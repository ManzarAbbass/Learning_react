const App = () => {
  function BtnClick(){
    console.log("Button is Clicked")
  }
  function Entermouse(){
    console.log("Mouse is Enter")
  }
  function scroll(){
    console.log("Scroll")
  }
  return (
    <div>
      {/* <button onMouseEnter={Entermouse} onClick={BtnClick} className="bg-black py-5 px-8 text-white mt-1">Click Me</button> */}
      {/* <button onMouseEnter={Entermouse} className="bg-orange-400 py-5 px-8 text-white mt-1">hover Me</button> */}
{/* //.. */}
      {/* write fnc in event class  */}
      {/* <button onClick={()=>{
        console.log("btn is clicked!")
      }} className="bg-amber-500 p-10">Click me</button> */}
{/* //.... */}
      {/* <input onInput={function(x){
        console.log(x.target.value)
      }} className="bg-black py-5 px-10 m-10 text-white" type="text" placeholder="Enter your Name" /> */}

      {/* <input onChange={function(x){
        console.log("Typing");
        console.log(x)
      }} className="bg-amber-600 px-10 py-5 m-10  text-white" type="text" placeholder="Enter Your Name" /> */}
{/* //.... */}
        {/* <div onMouseMove={function(x){
          console.log(`pageY value: ${x.pageY}`,`pageX value: ${x.pageX}`)
        }} className="bg-amber-600 h-150 w-150 text-center"></div> */}

 {/*//....  */}
          <div onWheel={scroll}>

          <div className="h-screen w-full bg-black">Hello</div>
          <div className=" h-screen w-full bg-[orange]">BGG</div>
          <div className="h-screen w-full bg-[pink]">GGG</div>
          </div>
    </div>
  )
}

export default App
