import { Bookmark } from "lucide-react"
const Cards = (arry) => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src="https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg" alt="" />
          <button>Save <Bookmark size={15} /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior MernStack Developer</h2>
          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Pakistan Karchi</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )

}

export default Cards
