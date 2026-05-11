import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {
  const {userData,setuserData} = useContext(AuthContext)
  // console.log(authData.employees)
  return (

    <div id="Alltask" className="bg-[#2c2c2c] p-5 mt-5 rounded-2xl">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between items-center gap-2 rounded">
          <h2 className="text-lg font-medium w-1/5 bg-red-600">Employee Name</h2>
          <h3 className="text-lg font-medium w-1/5 bg-red-600">New Task</h3>
          <h5 className="text-lg font-medium w-1/5 bg-red-600">Active Task</h5>
          <h5 className="text-lg font-medium w-1/5 bg-red-600">Completed</h5>
          <h5 className="text-lg font-medium w-1/5 bg-red-600">Failed</h5>
        </div>
      <div className="overflow-auto">
      {userData?.employees?.map(function (elem,idx) {
        return <div key={idx} className="bg-black-400  mb-2 py-2 px-4 flex justify-between items-center rounded border-1 border-green-300 ">
          <h2 className="text-lg font-medium w-1/5 text-red-400">{elem.firstName}</h2>
          <h3 className="text-lg font-medium w-1/5 text-blue-400">{elem.taskNumbers.newTask}</h3>
          <h5 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskNumbers.active}</h5>
          <h5 className="text-lg font-medium w-1/5 text-green-400">{elem.taskNumbers.completed}</h5>
          <h5 className="text-lg font-medium w-1/5 text-red-400">{elem.taskNumbers.failed}</h5>
        </div>
      })}
  </div>
    </div>
  )
}

export default AllTask
