const CreateTask = () => {
  return (
      <div className="p-5 bg-[#2c2c2c] rounded mt-10">
        <form className="flex flex-wrap w-full  items-start justify-between">
          <div className="w-1/2">
            <div className="mb-5">
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-white" type="text" placeholder="Make a UI design" />
            </div>

            <div className="my-5">
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-white" type="date" />
            </div>

            <div className="mb-5">
              <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
              <input className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-white" type="text" placeholder="employee name" />
            </div>
            <div className="mb-5">
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-white" type="text" placeholder="design, dev, etc" />
            </div>
          </div>
          <div className="w-1/2">
            <div className="mb-5">
              <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
              <textarea className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-white w-full" name="" id="" cols="30" rows="5" placeholder="Enter task description"></textarea>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full">Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
