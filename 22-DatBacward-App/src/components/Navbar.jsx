const Navbar = ({ theme, setTheme }) => {
  const setTheeme=()=>{
   if(theme==="light"){
    setTheme("dark")
   } else {
    setTheme("light")
   }
  }
  return (
    <div>
      <p>Theme is {theme}</p>
      <button onClick={()=>{
        setTheeme()
      }}>Change theme</button>
    </div>
  )
}

export default Navbar
