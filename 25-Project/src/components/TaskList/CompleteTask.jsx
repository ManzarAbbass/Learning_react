const CompleteTask = () => {
  return (
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
        <h3 className='bg-green-600 px-3 py-1 text-sm rounded-md'> High</h3>
        <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube vedio</h2>
        <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, debitis officiis vel magni fugit beatae.</p>
        <div className="mt-2">
          <button className="w-full">Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask
