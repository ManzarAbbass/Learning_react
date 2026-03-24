const App = () => {
  let num=0;
  function BtnClick(){
    console.log(num)
    num++
    console.log(num)

  }
  return (
    <div>
      <h1>Number is: {num}</h1>
      <button onClick={BtnClick} className="bg-black py-5 px-8 text-white mt-1">Increase Number</button>
    </div>
  )
}

export default App
