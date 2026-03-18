import Cards from "./Components/Cards"

const App = () => {
  const jobPostings = [
  {
    companyName: "TechFlow Solutions",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEl8mmgjZwbyg/company-logo_200_200/B56Zbdnhm1GsAM-/0/1747474848950/techflowservices_logo?e=2147483647&v=beta&t=FTtK5M0ptqW056OGsMQjOeXmI2wILWTEWL2BDmDuDZ8",
    role: "Senior React Developer",
    postedAt: "2 days ago",
    tags: ["Full-time", "Senior level"],
    pay: "$150",
    location: "Pakistan, Karachi"
  },
  {
    companyName: "Digital Pulse",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUXJEz9m3DgMjC8Y40Gn5BLS_bC0ZLYj71Q&s",
    role: "Full Stack Engineer",
    postedAt: "5 days ago",
    tags: ["Part-time", "Mid level"],
    pay: "$130",
    location: "Pakistan, Lahore"
  },
  {
    companyName: "Cloud Ninjas",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zUxKLZGtNv1a3vGOjJc5BHAhUhg_cf3D-A&s",
    role: "Backend Architect",
    postedAt: "1 week ago",
    tags: ["Remote", "Senior level"],
    pay: "$180",
    location: "Pakistan, Islamabad"
  },
  {
    companyName: "Web Wave",
    logo: "https://webwave.me/lib/hue725/logo-WebWave-lf1e6wof.png",
    role: "UI Developer",
    postedAt: "3 days ago",
    tags: ["Contract", "Mid level"],
    pay: "$120",
    location: "Pakistan, Karachi"
  },
  {
    companyName: "Swift Code",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPoi0fALopQqvBEMq6A4-EETjJ_WjVhycJg&s",
    role: "Lead React Developer",
    postedAt: "6 days ago",
    tags: ["Part-time", "Senior level"],
    pay: "$140",
    location: "Pakistan, Karachi"
  },
  {
    companyName: "Innovate PK",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdmJHrDiD4hBagBqEeBuOxtz0JHqsC6FT2A&s",
    role: "Senior DevOps Engineer",
    postedAt: "4 days ago",
    tags: ["Full-time", "Senior level"],
    pay: "$160",
    location: "Pakistan, Faisalabad"
  },
  {
    companyName: "NextGen Tech",
    logo: "https://www.48hourslogo.com/48hourslogo_data/2019/02/26/82270_1551189943.png",
    role: "Senior Mobile Developer",
    postedAt: "8 days ago",
    tags: ["Remote", "Senior level"],
    pay: "$145",
    location: "Pakistan, Karachi"
  },
  {
    companyName: "Cyber Solutions",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqFplNPG9k-goGMS2hnZ9cpIiIFPXzuRakA&s",
    role: "Senior Security Analyst",
    postedAt: "10 days ago",
    tags: ["Full-time", "Senior level"],
    pay: "$170",
    location: "Pakistan, Lahore"
  },
  {
    companyName: "Code Masters",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQC-LCkUGkYOmsqdl8kOwUkDFYiPmh3FGzWA&s",
    role: "Python Developer",
    postedAt: "1 day ago",
    tags: ["Part-time", "Junior level"],
    pay: "$110",
    location: "Pakistan, Rawalpindi"
  },
  {
    companyName: "Pixel Perfect",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpzU4K57iSxIKK5GG-miLe8jIeIQ2Kb8bTA&s",
    role: "Graphic Lead",
    postedAt: "7 days ago",
    tags: ["Contract", "Mid level"],
    pay: "$100",
    location: "Pakistan, Karachi"
  }
];

  return (
    <>
    <div className="parent">
        {jobPostings.map(function(elem,idx){
          return <Cards key={idx} name={elem.companyName} role={elem.role} tags={elem.tags} pay={elem.pay} postday={elem.postedAt} location={elem.location} logo={elem.logo}/>
        })}
    </div>
    </>

  )
}

export default App
