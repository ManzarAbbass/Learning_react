import { use } from "react"

const App = () => {

  //... Set Item in localStorage and sessionStorage
  // {setItem() me Key aur uski value dete hein kiuke set krnaw hota he ("name","manzar") aur value string me deni hoti he}

  // localStorage.setItem("programer","manzar");
  // sessionStorage.setItem("role","frontend developer");

  // ... Get Item from localStorage and sessionStorage
    // {getItem() me Key dete hein kiuke get krnaw hota he data ("name")}
  
  // const programer= localStorage.getItem("programer");
  // console.log(programer);
  // const role=sessionStorage.getItem("role");
  // console.log(role)

  // ... removeItem in localStorage and sessionStorage
  // {removeItem() me Key dete hein kiuke delete krnaw hota he data removeItem("name")}

  // localStorage.removeItem("programer");

  // ...Clear() in localStorage and sessionStorage
  // {clear() ko hmm localStorage.clear() and sessionstorage.clear() aese likhna hota he ye pora localstorage aur sessionStorage k data ura deta he }

  // sessionStorage.clear();
  // localStorage.clear();

  // //.... localStorage and sessionStorage with array and Object 
  // {localStorage and sessionStorage me array aur object ko store krne ke liye hume unko string me convert krna hota he using JSON.stringify() and get krne ke liye JSON.parse() ka use krte hein}

  const user={
    username:"manzar",
    age:23,
    city:"Karachi"
  }
  // console.log(user)
  localStorage.setItem("user",JSON.stringify(user))

  return (
    <div className="bg-black h-screen text-white">
      App
    </div>
  )
}

export default App
