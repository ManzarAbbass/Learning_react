import { useState } from "react"

const App = () => {
  const [num, setNum] = useState(10);
  const btnClicked = () => {
    // setNum call karne ke baad state immediately update nahi hoti.
    // React state ko schedule karta hai aur next render me update karta hai.
    // Isliye same function ke andar num ki value purani (previous) hi rehti hai.

    console.log(num) // phele bh print krdo tw 10 hi aygaw
    setNum(30);
    console.log(num); // yaha pe 30 print hona chaye tha apko lgta he lkn nhi yaha pe num ki initial value print hogi kiuke setNum jo he wo asynchronus way me kam krta he 
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
