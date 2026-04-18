
const UserDetail = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg font-semibold">John Doe</h2>
        <p className="text-sm text-gray-500">john.doe@example.com</p>
        <p className="text-sm">Software Engineer</p>
        </div>
        <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Go Back</button>
    </div>
  )
}

export default UserDetail
