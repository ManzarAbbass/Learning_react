import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div id='TaskList' className='h-[55%] w-full mt-10 py-5 flex items-center justify-items-start gap-5 flex-nowrap overflow-auto text-white'>
      {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return <AcceptTask key={idx} elem={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={idx} elem={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx} elem={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} elem={elem}/>
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
