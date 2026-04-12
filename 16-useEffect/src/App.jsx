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
  // 1. jab jab apki state change hui tab tab apki useEffect call hogi mtlb side effect horha hai manlo num state change ho rha hai to useEffect call hoga isko hmm bolte hein mounting 
  //   const [num, setNum] = useState(0)
  // function changeNum(){
  //   setNum(num+1);
  // }
  // useEffect(function(){
  //   console.log("Use Effect Called");
  // })

  // 2..apne agar dependency ka array pass krdia tw useEffect ek hi baar call hogaw 
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)
  function changeNum() {
    setNum(num + 1);
  }
  // useEffect(function () {
  //   console.log("Use Effect Called");
  // }, [])

  // {ab me charha hun jab jab num ki value change hogi tab tab useEffect call hoga mtlb num state ke change hone par side effect hoga to useEffect call hoga}
  useEffect(function(){
    console.log("Use Effect Called of num");
  },[num])
  //  hmm ne dependencies array me num pass krdiya mtlb jab num change ho wab useEffect chale 
  // }



  return (
    <div className="bg-black h-screen text-white">
      <h1>value of num is :{num}</h1>
      <h2>value of num2 is: {num2}</h2>

      <button onMouseEnter={()=>{
        changeNum();
      }}
      onMouseLeave={()=>{
        setNum2(num2+10);
      }} 
      className="bg-red-500 p-4">Change Number</button>

    </div>
  )
}

export default App
