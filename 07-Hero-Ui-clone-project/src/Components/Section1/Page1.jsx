import Leftcontent from "./Leftcontent"
import Rightcontent from "./Rightcontent"

const Page1 = () => {
  return (
    <div className="h-[89vh] flex gap-20 px-20">
      <Leftcontent/>
      <Rightcontent/>
    </div>
  )
}

export default Page1
