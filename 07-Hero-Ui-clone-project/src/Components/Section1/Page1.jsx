import Leftcontent from "./Leftcontent"
import Rightcontent from "./Rightcontent"

const Page1 = (props) => {
  return (
    <div className="h-[89vh] flex gap-20 px-20">
      <Leftcontent/>
      <Rightcontent user={props.inpt}/>
    </div>
  )
}

export default Page1
