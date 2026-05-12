import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-6 mt-10">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Employees Overview
      </h2>

      {/* Header */}
      <div className="hidden md:flex bg-gray-100 rounded-xl px-4 py-3 font-medium text-gray-600">
        <div className="w-1/5">Employee</div>
        <div className="w-1/5">New</div>
        <div className="w-1/5">Active</div>
        <div className="w-1/5">Completed</div>
        <div className="w-1/5">Failed</div>
      </div>

      {/* Rows */}
      <div className="mt-4 space-y-3">

        {userData?.employees?.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-xl px-4 py-3 flex flex-col md:flex-row md:items-center"
            >

              <div className="w-full md:w-1/5 font-semibold text-gray-800">
                {elem.firstName}
              </div>

              <div className="w-full md:w-1/5 text-blue-600 font-medium">
                {elem.taskNumbers.newTask}
              </div>

              <div className="w-full md:w-1/5 text-yellow-600 font-medium">
                {elem.taskNumbers.active}
              </div>

              <div className="w-full md:w-1/5 text-green-600 font-medium">
                {elem.taskNumbers.completed}
              </div>

              <div className="w-full md:w-1/5 text-red-600 font-medium">
                {elem.taskNumbers.failed}
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default AllTask;