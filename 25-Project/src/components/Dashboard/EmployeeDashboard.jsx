import Header from "../others/Header"
import TaskListNumber from "../others/TaskListNumber"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = () => {
  return (
    <div className="h-screen p-5">
      <Header />
      <TaskListNumber />
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
