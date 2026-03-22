import Section1 from "./Components/Section1/Section1"
import Section2 from "./Components/Section2/Section2"

const App = () => {
  const Users=[{
    img:"https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:"Supporting rural communities by providing access to basic healthcare and clean water. Our mission is to bridge the gap between urban facilities and remote villages for a better future.",
    tag:"Underserved"
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1731355868248-334b5698fe48?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:"Helping local women start their own small businesses through interest-free micro-loans. Witnessing the transformation of homemakers into confident entrepreneurs and community leaders.",
    tag:"Empowered"
  },
{
    img:"https://plus.unsplash.com/premium_photo-1663029032261-df6f5e2404bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:"Rebuilding lives of those affected by natural disasters. From providing temporary shelter to long-term psychological support, we stand with the survivors until they are back on their feet.",
    tag:"Resilient"
  },
  {
    img:"https://images.unsplash.com/photo-1494809610410-160faaed4de0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    intro:"Breaking barriers by offering free digital literacy workshops to street children. We believe every child deserves the chance to learn coding and modern skills in this digital age.",
    tag:"Education"
  },
  {
    img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
    intro:"Teaching urban farming techniques to reduce food insecurity in low-income neighborhoods. Our goal is to create green lungs in the city while ensuring fresh organic food for everyone.",
    tag:"Sustainability"
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1713720412246-338cff03ae83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMzfHxtaW5kZnVsbG5lc3N8ZW58MHx8MHx8fDA%3D",
    intro:"Creating a platform for young activists to discuss climate change and social justice. We empower the next generation to raise their voice against inequality and environmental neglect.",
    tag:"Mindfulness"
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1705010649888-fab592e31b68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHZpc2lvbmFyeXxlbnwwfHwwfHx8MA%3D%3D",
    intro:"Implementing tech-driven solutions for waste management in crowded marketplaces. By turning waste into energy, we are designing cleaner and smarter cities for our children.",
    tag:"Visionary"
  }]

  return (
    <>
    <Section1 user={Users}/>
    <Section2/>
    </>

  )
}

export default App
