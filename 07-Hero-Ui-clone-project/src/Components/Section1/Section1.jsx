import Navbar from './Navbar'
import Page1 from './Page1'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full '>
        <Navbar/>
        <Page1 inpt={props.user}/>
    </div>
  )
}

export default Section1
