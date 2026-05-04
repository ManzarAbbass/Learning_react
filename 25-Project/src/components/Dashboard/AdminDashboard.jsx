import Header from "../others/Header"

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10 text-white">
      <Header/>
      <div>
        <form >
          <h3>Task Title</h3>
          <input type="text" placeholder="Make a UI design" />
          <h3> Description</h3>
          <textarea name="" id="" cols="30" rows="5" placeholder="Enter task description"></textarea>
          <h3>Date</h3>
          <input type="date" />
          <h3>Asign to</h3>
          <input type="text" placeholder="employee name"/>
          <h3>Category</h3>
          <input type="text" placeholder="design, dev, etc"/>
          <button>Create Task</button>
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
