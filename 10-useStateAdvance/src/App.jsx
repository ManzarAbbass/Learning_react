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
// const App = () => {
//   const [user, setUser] = useState({name:"Manzar",age:22});
//   const [arr,setArr]=useState([10,20,30])
//   const changeUser=()=>{
    // two ways to update the state of an object in react
    // 1. setUser({name:"Shoaib",age:22}) isme humne pura object replace kr diya
    // const [a,...b]=arr
    // console.log(a)
    // console.log(b)
    // 2. setUser({...user,name:"Shoaib"}) isme humne spread operator ka use krke pura object copy kr diya aur sirf name property ko update kr diya aur ye destructuring ka use krke pura object copy krne ka tarika he
    // const newUser={...user}
    // newUser.name="Shoaib"
    // setUser(newUser)

    // const newArr=[...arr];
    // newArr.push(40);
    // setArr(newArr)
//   }
//   return (
//     <div className="bg-black text-white h-screen">
//       {/* <h1 className="font-bold text-5xl">{user.name}, {user.age}</h1> */}
//       <h1 className="font-bold text-5xl">{arr}</h1>
//       <button onClick={changeUser} className="bg-gray-500 rounded px-5 py-3">Change user</button>
//     </div>
//   )
// }

// export default App

// const App=()=>{
//   const [Array, setArray] = useState([10,20,30]);
//   const [Obj, setObj] = useState({name:"Manzar",age:22});
//   const changeObject=()=>{
//     // const newObj={...Obj};
//     // newObj.age=23;
//     // setObj(newObj);

//     // short working way 
//     // setObj(prev=>({...prev,age:23}))
//     setObj(prev=>({...prev,age:prev.age+1}))
//   }
//   const arrayChange=()=>{
//     // const newArr=[...Array];
//     // newArr.push(40);
//     // setArray(newArr);

//     // short working way
//     // setArray(prev=>[...prev,50])
//     // setArray(prev => [...prev, prev.length * 10]);
//     setArray(prev => [...prev, Math.floor(Math.random() * 100)]);
//   }
//   return (
//     <div>
//       <h1 className="font-bold text-7xl">{Array}</h1>
//       <button onClick={arrayChange} className="bg-red-500 px-4 py-2 rounded">change</button>
//       <h2 className="font-bold text-7xl">{Obj.name},{Obj.age}</h2>
//       <button onClick={changeObject} className="bg-blue-500 px-4 py-2 rounded">change</button>
//     </div>
//   )
// }


// Batch Update in React 
export default App