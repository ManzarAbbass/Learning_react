import { useDispatch, useSelector } from "react-redux"
import { deleteSubject } from "../../features/subjects/subjectsSlice"

const SubjectList = () => {
  const dispatch = useDispatch()  
  const subjects= useSelector((state)=>state.subjects)
  console.log(subjects)

  if(subjects.length===0){
    return <div className="bg-yellow-50 w-fit p-5 border-2 border-amber-400 rounded-xl"><h1 className="text-gray-400 text-2xl">"No subjects added yet"</h1></div>
  }

  return (subjects.map((subj,id)=>{
    return <div key={id} className="max-w-sm p-5 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-200 flex flex-col justify-between">
    <div>

        <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold text-gray-800 tracking-tight capitalize">
                {subj.subjectname}
            </h3>
            <button 
            onClick={()=>{
                dispatch(deleteSubject(subj.id))
            }}
            className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition duration-150" title="Delete Subject">
                <svg xmlns="w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-4">
            <svg xmlns="w3.org" className="h-4 w-4 mr-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong className="text-gray-700 font-semibold">{subj.hours}</strong> Hours</span>
        </div>
    </div>


    <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 uppercase tracking-wider">
            {subj.priority} Priority
        </span>


        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 uppercase tracking-wider">
            {subj.difficulty}
        </span>
    </div>
</div>
  })

  )
}

export default SubjectList
