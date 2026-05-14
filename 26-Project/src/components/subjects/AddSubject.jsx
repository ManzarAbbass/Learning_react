import { useState } from "react";
import { useDispatch} from "react-redux"
import { addSubject } from "../../features/subjects/subjectsSlice";

const AddSubject = () => {
  const dispatch = useDispatch()

  const [subjectname, setSubjectName] = useState("")
  const [hours, setHours] = useState("")
  const [priority, setPriority] = useState("")
  const [difficulty, setDifficulty] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation check taake khali data submit na ho
    if (!subjectname || !hours || !priority || !difficulty) {
      alert("Please fill all fields");
      return;
    }

    const subject = {
      id: Date.now(), // Items loop karne ke liye unique ID zaroori hai
      subjectname,
      hours,
      priority,
      difficulty
    }
    
    dispatch(addSubject(subject))

    // Form clear karne ke liye
    setSubjectName("")
    setHours("")
    setPriority("")
    setDifficulty("")
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Subject Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject Name
          </label>
          <input
            onChange={(e) => setSubjectName(e.target.value)}
            value={subjectname}
            type="text"
            placeholder="e.g. Mathematics"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hours
          </label>
          <input
            onChange={(e) => setHours(Number(e.target.value))}
            value={hours}
            type="number"
            placeholder="e.g. 4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="" disabled>
              Select Priority
            </option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Difficulty
          </label>
          <select 
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="" disabled>
              Select Difficulty
            </option>
            <option value="hard">Hard</option>
            <option value="medium">Medium</option>
            <option value="easy">Easy</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSubject;
