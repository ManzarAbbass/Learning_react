import taskData from "../features/tasks/taskData"

const data = taskData
const generateTask = (subject) => {
    const templates = data[subject.subjectname]
    if (!templates) {
        return [{
            id: Date.now(),
            title: `Study ${subject.subjectname}`,
            completed: false,
            subjectId: subject.id
        }]
    }

    let taskCount=1
    let difficulty =subject.difficulty.toLowerCase()
    const selectedTasks= templates[difficulty]
    let priority = subject.priority.toLowerCase()
    if(priority==="high"){
        taskCount=4; // reassign krdiya
    }
    else if(priority==="medium"){
        taskCount=2
    }
    const priorityTask=selectedTasks.slice(0,taskCount)
    return priorityTask.map((task,idx)=>({
    id:Date.now() + idx,
    title:task,
    completed:false,
    subjectId:subject.id
}))

}

export default generateTask