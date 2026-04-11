const App = () => {
  localStorage.setItem("programer","manzar");
  sessionStorage.setItem("role","frontend developer");
  return (
    <div className="bg-black h-screen text-white">
      App
    </div>
  )
}

export default App
