import { useEffect, useState } from "react"
// ...useEffect kiya hai? Ye ek hook hai jo functional components me side effects ko handle karne ke liye use hota hai. Side effects ka matlab hai ki aise operations jo component ke render hone ke baad perform hote hain, jaise ki data fetching, subscriptions, timers, etc.
const App = () => {
  // ....Wrong Way to use useEffect
  // function random(){
  //   const num=Math.random();
  //   console.log(num);
  // }
  // random();


  // const [num, setNum] = useState(0)
  // function changeNum(){
  //   setNum(num+1);
  // }
  // useEffect(function(){
  //   console.log("Use Effect Called");
  // })

  // ... ye ap normal function se bh krskte ho tw ye useeffect ka proper use nhi hai useeffect ka kaam kuch aur he 

  // {.....................usecase of useEffect
  // 1. jab jab apki state change hui tab tab apki useEffect call hogi mtlb side effect horha hai manlo num state change ho rha hai to useEffect call hoga 
  //   const [num, setNum] = useState(0)
  // function changeNum(){
  //   setNum(num+1);
  // }
  // useEffect(function(){
  //   console.log("Use Effect Called");
  // })

  // 2..apne agar array pass krdia tw useEffect ek hi baar call hogaw 
  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)
  // function changeNum() {
  //   setNum(num + 1);
  // }
  // useEffect(function () {
  //   console.log("Use Effect Called");
  // }, [])

  // {ab me charha hun jab jab num ki value change hogi tab tab useEffect call hoga mtlb num state ke change hone par side effect hoga to useEffect call hoga}
  // useEffect(function(){
  //   console.log("Use Effect Called of num");
  // },[num]) isko hmm bolte updating ya re-rendering ke time pe useEffect chalna mtlb jab bhi num change ho to useEffect chale
  //  hmm ne  array me num dependencies pass krdiya mtlb jab num change ho wab useEffect chale 
  // }


  //  ........................................................ Next Example
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  function aChanging() {
    console.log("A ki value change ho gayi");
  }
  function bChanging() {
    console.log("B ki value change ho gayi");
  }
  useEffect(()=>{
    aChanging();
    console.log("Use Effect of A called");
  },[a])
  return (
    <div className="bg-black h-screen text-white">
      {/* <h1>value of num is :{num}</h1>
      <h2>value of num2 is: {num2}</h2>

      <button onMouseEnter={()=>{
        changeNum();
      }}
      onMouseLeave={()=>{
        setNum2(num2+10);
      }} 
      className="bg-red-500 p-4">Change Number</button> */}

      <h1>change value of a is :{a}</h1>
      <button onClick={() => {
        setA(a + 1)
      }}
        className="px-20 py-20 m-5 bg-gray-400">Change A</button>
      <h1>change value of b is :{b}</h1>
      <button onClick={() => {
        setB(b - 1)
      }} className="px-20 py-20 m-5 bg-gray-400">Change B</button>
    </div>
  )
}

// useEffect React ka hook hai jo side effects handle karta hai
// side effects wo operations hote hain jo render ke baad perform hote hain
// jaise API calls, localStorage, timers, etc.

// [] → sirf component mount hone par chalega
// [a] → sirf jab 'a' change hoga tab chalega
// bina dependency → har render pe chalega (avoid)

// mounting = component pehli baar render hona
// updating = jab state change ho aur component re-render ho

export default App
