const TaskListNumber = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-10 gap-5">

      <div className="py-6 px-9 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl shadow-lg text-white">
        <h2 className="text-4xl font-bold">
          {data.taskNumbers.newTask}
        </h2>

        <h3 className="text-lg md:text-xl font-medium mt-2">
          New Task
        </h3>
      </div>

      <div className="py-6 px-9 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl shadow-lg text-white">
        <h2 className="text-4xl font-bold">
          {data.taskNumbers.completed}
        </h2>

        <h3 className="text-lg md:text-xl font-medium mt-2">
          Completed Task
        </h3>
      </div>

      <div className="py-6 px-9 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl shadow-lg text-white">
        <h2 className="text-4xl font-bold">
          {data.taskNumbers.active}
        </h2>

        <h3 className="text-lg md:text-xl font-medium mt-2">
          Accepted Task
        </h3>
      </div>

      <div className="py-6 px-9 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-lg text-white">
        <h2 className="text-4xl font-bold">
          {data.taskNumbers.failed}
        </h2>

        <h3 className="text-lg md:text-xl font-medium mt-2">
          Failed Task
        </h3>
      </div>

    </div>
  )
}

export default TaskListNumber