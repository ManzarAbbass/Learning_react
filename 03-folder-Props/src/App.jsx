import Card from "./Components/Card"

const App = () => {

  return (
    <>
    <div className="parent">
    <Card user='Green Papi'age={18} img='https://media.istockphoto.com/id/144809057/photo/green-donut.webp?a=1&b=1&s=612x612&w=0&k=20&c=T1VHiL3lPsPX5-sUIW0xZuqNE3KWROk7OfKj__mFF3o='/>
    <Card user='Green levoto'age={20} img='https://media.istockphoto.com/id/2195582372/photo/young-woman-reaching-for-chocolate-mint-donut-in-bakery-cafe.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZAYpmJ5VjSMdadOeLZ_8-DBRPICEaO53CzDXqxB6sP0='/>
    </div>
    </>
  )
}

export default App
