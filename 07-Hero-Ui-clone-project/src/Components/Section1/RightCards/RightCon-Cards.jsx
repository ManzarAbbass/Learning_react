import { ArrowRight } from "lucide-react"
const RightConCards = (props) => {
  return (
    <>
    <div idx={props.idx}  className='h-full w-80 rounded-2xl shrink-0 shadow-xl shadow-black/50 relative'>
    <img className="h-full object-cover rounded-2xl brightness-60" src={props.img} alt="" />
    <div className='absolute top-0 left-0 h-full w-full rounded-2xl bg-transparent flex flex-col justify-between p-5'>
      <h2 className='bg-white p-3 flex items-center justify-center h-10 w-10 rounded-full'>{props.idx+1}</h2>
      <div className="flex flex-col gap-15">
        <p className="text-white leading-8 text-shadow-lg text-m">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto enim beatae rem deleniti temporibus porro quidem recusandae nesciunt sit voluptate.
        </p>
        <div className="flex gap-20 items-center">
        <button className='bg-blue-500 py-3 px-10 rounded-3xl text-white'>{props.tag}</button>
        <p className='bg-blue-500 rounded-full p-3 w-10 h-10 flex items-center text-white'><ArrowRight/></p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default RightConCards
