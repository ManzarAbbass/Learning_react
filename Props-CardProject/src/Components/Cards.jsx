import { Bookmark } from "lucide-react"
const Cards = (arry) => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={arry.logo} alt="" />
          <button>Save <Bookmark size={15} /></button>
        </div>
        <div className="center">
          <h3>{arry.name} <span>{arry.postday}</span></h3>
          <h2>{arry.role}</h2>
          <div className="tag">
            <h4>{arry.tags[0]}</h4>
            <h4>{arry.tags[1]}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{arry.pay}</h3>
          <p>{arry.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )

}

export default Cards
