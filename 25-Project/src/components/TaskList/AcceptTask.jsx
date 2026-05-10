const AcceptTask = ( {elem} ) => {
  return (
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
        <h3 className='bg-yellow-600 px-3 py-1 text-sm rounded-md'>{elem.category}</h3>
        <h4 className='text-sm'>{elem.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{elem.taskTitle}</h2>
        <p className='text-sm mt-2'>{elem.taskDescription}</p>
        <div className="flex justify-between mt-4">
          <button className="bg-yellow-800 py-1 px-2 text-sm rounded">mark as Completed</button>
          <button className="bg-yellow-800 py-1 px-2 text-sm rounded">mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
