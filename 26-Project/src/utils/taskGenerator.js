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

    let difficulty =subject.difficulty.toLowerCase()
    const selectedTasks= templates[difficulty]
    return selectedTasks.map((task,idx)=>({
            id:Date.now() + idx,
            title:task,
            completed:false,
            subjectId:subject.id
    }))
}

export default generateTask