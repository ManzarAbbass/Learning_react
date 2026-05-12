import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTasktitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const { userData, setuserData } = useContext(AuthContext);

  const submitHandler = (evtObj) => {
    evtObj.preventDefault();

    const newTask = {
      taskTitle,
      taskDate,
      taskCategory,
      taskDescription,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    // console.log(newTask) ----> yaha pe khali obj is liye araha he kiuke setTask asynchronous work krha he

    // 1. Data localStorage se liya aur update kiya
    const data = JSON.parse(localStorage.getItem("employees"));

    data.forEach(function (empl) {
      if (assignTo == empl.firstName) {
        empl.tasks.push(newTask);
        empl.taskNumbers.newTask = empl.taskNumbers.newTask + 1;
      }
    });

    console.log(data);

    // 2. LocalStorage update karein
    localStorage.setItem("employees", JSON.stringify(data));

    // 3. Sahi tareeke se State update karein (Object ke andar array bhejein)
    setuserData({ ...userData, employees: data });

    setTasktitle("");
    setTaskDate("");
    setAssignTo("");
    setTaskCategory("");
    setTaskDescription("");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-6 mt-10">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Create Task
      </h2>

      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >

        <div className="space-y-4">

          <input
            onChange={(e) => setTasktitle(e.target.value)}
            value={taskTitle}
            className="w-full bg-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Task Title"
          />

          <input
            onChange={(e) => setTaskDate(e.target.value)}
            value={taskDate}
            className="w-full bg-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            type="date"
          />

          <input
            onChange={(e) => setAssignTo(e.target.value)}
            value={assignTo}
            className="w-full bg-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Assign to (employee name)"
          />

          <input
            onChange={(e) => setTaskCategory(e.target.value)}
            value={taskCategory}
            className="w-full bg-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Category (design, dev, etc)"
          />

        </div>

        <div className="space-y-4">

          <textarea
            onChange={(e) => setTaskDescription(e.target.value)}
            value={taskDescription}
            className="w-full bg-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
            placeholder="Task description"
          ></textarea>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
            Create Task
          </button>

        </div>

      </form>
    </div>
  );
};

export default CreateTask;