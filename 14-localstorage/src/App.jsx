const App = () => {

  //... Set Item in localStorage and sessionStorage
  // {setItem() me Key aur uski value dete hein kiuke set krnaw hota he ("name","manzar") aur value string me deni hoti he}

  // localStorage.setItem("programer","manzar");
  // sessionStorage.setItem("role","frontend developer");

  // ... Get Item from localStorage and sessionStorage
    // {getItem() me Key dete hein kiuke get krnaw hota he data ("name")}
  const programer= localStorage.getItem("programer");
  console.log(programer);
  const role=sessionStorage.getItem("role");
  console.log(role)
  return (
    <div className="bg-black h-screen text-white">
      App
    </div>
  )
}

export default App
