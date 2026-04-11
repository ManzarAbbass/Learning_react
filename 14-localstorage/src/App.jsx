const App = () => {

  //... Set Item in localStorage and sessionStorage
  // localStorage.setItem("programer","manzar");
  // sessionStorage.setItem("role","frontend developer");

  // ... Get Item from localStorage and sessionStorage

  const programer= localStorage.getItem("programer");
  console.log(programer);
  const role=sessionStorage.getItem("role");
  return (
    <div className="bg-black h-screen text-white">
      App
    </div>
  )
}

export default App
