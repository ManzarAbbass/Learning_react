const CompleteTask = ( {elem} ) => {
  return (
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
        <h3 className='bg-green-600 px-3 py-1 text-sm rounded-md'>{elem.category}</h3>
        <h4 className='text-sm'>{elem.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{elem.taskTitle}</h2>
        <p className='text-sm mt-2'>{elem.taskDescription}</p>
        <div className="mt-2">
          <button className="w-full bg-green-600 py-1 px-2">Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask
