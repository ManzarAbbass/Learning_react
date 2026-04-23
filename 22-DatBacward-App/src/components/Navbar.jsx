const Navbar = ({ theme, setTheme }) => {
  const setTheeme=()=>{
   if(theme==="light"){
    setTheme("dark");
   } else {
    setTheme("light");
   }
  }
  return (
    <div>
      <p>Theme is {theme}</p>
      <button onClick={()=>{
        setTheeme();
      }} 
      className="bg-red-500 p-5 rounded-2xl mt-2"
      >Change theme</button>
    </div>
  )
}

export default Navbar
