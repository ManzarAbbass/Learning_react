import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({
  data,
  setUser,
  setLoggedInUserData,
}) => {
  return (
    <div className="min-h-screen w-full bg-[#f4f7fb] p-4 md:p-8">

      <div className="max-w-7xl mx-auto">

        <Header
          data={data}
          setUser={setUser}
          setLoggedInUserData={setLoggedInUserData}
        />

        <div className="mt-8">
          <TaskListNumber data={data} />
        </div>

        <div className="mt-8">
          <TaskList data={data} />
        </div>

      </div>
    </div>
  );
};

export default EmployeeDashboard;