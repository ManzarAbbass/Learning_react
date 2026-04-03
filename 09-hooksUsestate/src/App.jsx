import React, { useState } from 'react'


// ..Comment: Usestate=>useState React ka ek hook hai jo component me state (data) manage karne ke liye use hota hai.Normal JavaScript me agar hum variable change karein to UI automatically update nahi hoti, lekin React me jab hum state change karte hain to React component ko re-render karta hai aur UI automatically update ho jati hai.React me hum direct DOM manipulation nahi karte, balkay state ko update karte hain aur React khud efficiently DOM ko update karta hai.Isliye state ko "single source of truth" kaha jata hai.

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
// const App = () => {
//   const [num, setNum] = useState(5);
//   const Increase=()=>{
//     setNum(num+1);
//   }
//   return (
//     <div>
//       <h1>Value of num is :{num}</h1>
//       <button onClick={()=>{
//         Increase();
//       }} className='bg-purple-300 text-white px-4 py-2 border border-black my-4 rounded-2xl'>Click</button>
//     </div>
//   )
// }

// export default App

const App = () => {
  const [numb, setNumb] = useState(0);
  const Increase=()=>{
    setNumb(numb+1);
  }
  const Decrease=()=>{
    setNumb(numb-1);
  }
  const Reset=()=>{
    // setNumb(numb=0);
    setNumb(0);
  }
  return (
    <div className='bg-black w-screen h-screen p-5 flex flex-col items-center gap-10'>
      <h1 className='bg-yellow-200 w-150 h-120 flex items-center justify-center text-9xl font-bold'> {numb}</h1>
      <div className='flex gap-5 text-black'>
        <button onClick={()=>{
          Increase()
        }} className='bg-yellow-400 px-4 py-3 rounded'>increase</button>
        <button onClick={()=>{
          Decrease()
        }} className='bg-yellow-400 px-4 py-3 rounded'>decrease</button>
        <button onClick={()=>{
          Reset()
        }} className='bg-yellow-400 px-4 py-3 rounded'>reset</button>
      </div>
    </div>
  )
}

export default App


