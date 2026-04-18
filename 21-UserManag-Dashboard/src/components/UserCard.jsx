const UserCard = () => {
  return (
    <div className="bg-white flex flex-col items-center gap-6 p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg font-semibold">John Doe</h2>
        <p className="text-sm text-gray-500">john.doe@example.com</p>
        <p className="text-sm">Software Engineer</p>
        </div>
        <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">View Details</button>
    </div>
  )
}

export default UserCard
