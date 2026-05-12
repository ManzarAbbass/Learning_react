const FailedTask = ({ elem }) => {
  return (
    <div className='flex-shrink-0 w-[320px] min-h-[320px] bg-white border border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300'>

      <div className='flex justify-between items-center'>

        <h3 className='bg-red-100 text-red-700 px-4 py-1 text-sm font-medium rounded-full'>
          {elem.category}
        </h3>

        <h4 className='text-sm text-gray-500'>
          {elem.taskDate}
        </h4>

      </div>

      <h2 className='mt-6 text-2xl font-bold text-gray-800'>
        {elem.taskTitle}
      </h2>

      <p className='text-sm text-gray-500 mt-3 leading-relaxed'>
        {elem.taskDescription}
      </p>

      <div className="mt-8">
        <button className="w-full bg-red-500 py-3 rounded-xl text-white font-medium">
          Failed
        </button>
      </div>

    </div>
  )
}

export default FailedTask