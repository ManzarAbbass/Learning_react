import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

const AdminDashboard = ({ setUser, setLoggedInUserData }) => {
  return (
    <div className="min-h-screen w-full bg-[#f4f7fb] p-4 md:p-8">
      
      <div className="max-w-7xl mx-auto">

        <Header
          setUser={setUser}
          setLoggedInUserData={setLoggedInUserData}
        />

        <div className="mt-8">
          <CreateTask />
        </div>

        <div className="mt-8">
          <AllTask />
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
