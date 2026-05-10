import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {
  const authData = useContext(AuthContext)
  // console.log(authData.employees)
  return (

    <div id="Alltask" className="bg-[#2c2c2c] p-5 mt-5 rounded-2xl h-48 overflow-auto">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between items-center rounded ">
          <h2 className="w-1/5 bg-red-600">Employee Name</h2>
          <h3 className="w-1/5 bg-red-600">New Task</h3>
          <h5 className="w-1/5 bg-red-600">Active Task</h5>
          <h5 className="w-1/5 bg-red-600">Completed</h5>
          <h5 className="w-1/5 bg-red-600">Failed</h5>
        </div>
      <div>
      {authData.employees.map(function (elem,idx) {
        return <div key={idx} className="bg-red-400 mb-2 py-2 px-4 flex justify-between items-center rounded ">
          <h2 className="w-1/5 bg-red-600">{elem.firstName}</h2>
          <h3 className="w-1/5 bg-red-600">Task</h3>
          <h5 className="w-1/5 bg-red-600">Status: In Progress</h5>
          <h5 className="w-1/5 bg-red-600">Status: In Progress</h5>
          <h5 className="w-1/5 bg-red-600">Failed</h5>
        </div>
      })}
  </div>
    </div>
  )
}

export default AllTask
