import Nav2 from "./Nav2"

const Navbar = (theme) => {
console.log(theme.children[0].props.children)
  return (
    <div className="flex bg-green-600 justify-between items-center py-[14px] px-[20px]">
    <h2>Creative App</h2>
      <Nav2 theme={theme.theme}/>
    </div>
  )
}

export default Navbar
