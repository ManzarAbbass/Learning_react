import { useParams } from "react-router-dom"

const Coursedet = () => {
    const params=useParams()
  return (
    <div>
      <h1 className="absolute top-[30%] left-[50%] transform -translate-x-1/2 translate-y-1/2 text-8xl underline">{params.courseid},CourseDet Page</h1>
    </div>
  )
}

export default Coursedet
