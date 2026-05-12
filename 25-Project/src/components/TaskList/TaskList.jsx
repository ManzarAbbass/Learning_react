import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div
      id='TaskList'
      className='w-full mt-10 flex gap-6 overflow-x-auto pb-5'
    >

      {data.tasks.map((elem, idx) => {

        if (elem.active) {
          return <AcceptTask key={idx} elem={elem} />
        }

        if (elem.newTask) {
          return <NewTask key={idx} elem={elem} />
        }

        if (elem.completed) {
          return <CompleteTask key={idx} elem={elem} />
        }

        if (elem.failed) {
          return <FailedTask key={idx} elem={elem} />
        }

      })}

      {/* <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask /> */}

    </div>
  )
}

export default TaskList