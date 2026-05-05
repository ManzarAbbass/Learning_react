import Header from "../others/Header"
import TaskListNumber from "../others/TaskListNumber"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({ data }) => {
  // console.log(data)
  return (
    <div className="h-screen p-5 text-white">
      <Header data={data}/>
      <TaskListNumber data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
