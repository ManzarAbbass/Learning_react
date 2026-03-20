import RightConCards from "./RightCards/RightCon-Cards"
import "../Section1/RightCards/RightCard.css"
const Rightcontent = () => {
  return (
    <div className="right h-full w-2/3 p-6 flex gap-5 overflow-x-auto no-scrollbar">
        <RightConCards/>
    </div>
  )
}

export default Rightcontent
