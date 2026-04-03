import { useState } from "react"

// const App = () => {
//   const [num, setNum] = useState(10);
//   const btnClicked = () => {
    // setNum call karne ke baad state immediately update nahi hoti.
    // React state ko schedule karta hai aur next render me update karta hai.
    // Isliye same function ke andar num ki value purani (previous) hi rehti hai.

    // console.log(num) // phele bh print krdo tw 10 hi aygaw
    // setNum(30);
    // console.log(num); // yaha pe 30 print hona chaye tha apko lgta he lkn nhi yaha pe num ki initial value print hogi kiuke setNum jo he wo asynchronus way me kam krta he 
  // }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

// export default App

// ......working with Objects & Arrays in useState
const App = () => {
  const [user, setUser] = useState({name:"Manzar",age:22});
  const [arr,setArr]=useState([10,20,30])
  const changeUser=()=>{
    // two ways to update the state of an object in react
    // 1. setUser({name:"Shoaib",age:22}) isme humne pura object replace kr diya
    // const [a,...b]=arr
    // console.log(a)
    // console.log(b)
    // 2. setUser({...user,name:"Shoaib"}) isme humne spread operator ka use krke pura object copy kr diya aur sirf name property ko update kr diya aur ye destructuring ka use krke pura object copy krne ka tarika he
    // const newUser={...user}
    // newUser.name="Shoaib"
    // setUser(newUser)

    const newArr=[...arr];
    newArr.push(40);
    setArr(newArr)
  }
  return (
    <div className="bg-black text-white h-screen">
      {/* <h1 className="font-bold text-5xl">{user.name}, {user.age}</h1> */}
      <h1 className="font-bold text-5xl">{arr}</h1>
      <button onClick={changeUser} className="bg-gray-500 rounded px-5 py-3">Change user</button>
    </div>
  )
}

export default App
