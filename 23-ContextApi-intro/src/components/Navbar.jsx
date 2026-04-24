import { useContext } from "react"
import Nav2 from "./Nav2"
import {ThemeDataContext}  from "../context/ThemeContext"

const Navbar = (theme) => {
// console.log(theme.children[0].props.children)
const data=useContext(ThemeDataContext)
console.log(data)
  return (
    <div className="flex bg-green-600 justify-between items-center py-[14px] px-[20px]">
    <h2>{data}</h2>
      <Nav2 theme={theme.theme}/>
    </div>
  )
}

export default Navbar
