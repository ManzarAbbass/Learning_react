const Nav2 = ({theme}) => {
  return (
    <div className="flex gap-5">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>{theme}</h4>
    </div>
  )
}

export default Nav2
