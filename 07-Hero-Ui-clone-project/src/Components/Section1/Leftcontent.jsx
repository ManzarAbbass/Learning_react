import {ArrowUpRight } from "lucide-react"
const Leftcontent = () => {
  return (
    <div className="text-black  h-full w-1/3 flex flex-col justify-between">
        <div className="p-9">
      <h2 className="mb-5 text-6xl font-bold leading-[1.1]">Prospective <span className="text-gray-600">Customer</span> Segmentation</h2>
      <p className="text-xl font-medium text-gray-500">Prospective customer segmentation involves dividing potential leads into specific groups based on shared demographics, behaviors, and needs to optimize marketing strategies.</p>
        </div>
        <div>
            <ArrowUpRight color="black" size={80}/>
        </div>
    </div>
  )
}

export default Leftcontent
