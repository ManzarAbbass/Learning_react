import React, { useState } from 'react'


// ..Comment: Usestate=>React me jab ap koi variable bnate hein ya variable ko change krte hein to ap directly dom ke sath interact krte hein but react me ap directly dom ke sath interact nhi krte ap state ke sath interact krte hein state me ap variable ko store krte hein aur jab ap state change krte hein to react khud hi dom ko update kr deta hai isliye react me apko direct dom ke sath interact nhi krna padta hai example=> apko ek button bnana hai aur jab ap button pe click kro to text change ho jaye to ap directly dom ke sath interact nhi krte ap state ke sath interact krte hein aur state me ap variable ko store krte hein aur jab ap state change krte hein to react khud hi dom ko update kr deta hai isliye react me apko direct dom ke sath interact nhi krna padta hai mtlb state single source of truth hota hai apka data state me store hota hai aur jab ap state change krte hein to react khud hi dom ko update kr deta hai isliye react me apko direct dom ke sath interact nhi krna padta hai

// Code.. without usestate
// const App = () => {
//   let a=20;
//   function Increase(){
//     a=a+1;
//     console.log(a);
//   }
//   return (
//     <div className='text-3xl font-bold underline text-purple-400'>
//       <h1>Value of a is : {a}</h1>
//       <button onClick={()=>{
//         Increase();
//       }} className='bg-purple-300 text-white px-4 py-2 border border-black my-4 rounded-2xl'>Click</button>
//     </div>
//   )
// }

// Code.. with usestate
const App = () => {
  const [num, setNum] = useState(5);
  const Increase=()=>{
    setNum(num+1);
  }
  return (
    <div>
      <h1>Value of num is :{num}</h1>
      <button onClick={()=>{
        Increase();
      }} className='bg-purple-300 text-white px-4 py-2 border border-black my-4 rounded-2xl'>Click</button>
    </div>
  )
}

export default App

