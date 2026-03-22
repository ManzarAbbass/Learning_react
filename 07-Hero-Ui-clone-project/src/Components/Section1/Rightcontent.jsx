import RightConCards from "./RightCards/RightCon-Cards"
import "../Section1/RightCards/RightCard.css"
const Rightcontent = (props) => {
  return (
    <div className="right h-full w-2/3 p-6 flex gap-5 overflow-x-auto no-scrollbar">
        {props.user.map((x,idx)=>{
        return <RightConCards idx={idx} img={x.img} intro={x.intro} tag={x.tag}/>
        })}
    </div>
  )
}

export default Rightcontent
