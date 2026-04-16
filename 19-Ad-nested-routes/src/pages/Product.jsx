import { Link, Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div>
        <div className="flex justify-center items-center gap-4">
            <Link className="underline" to='/product/men'>Men's</Link>
            <Link className="underline"  to='/product/women'>Womens</Link>
            <Link className="underline"  to='/product/kid'>Kid's</Link>
        </div>
      <Outlet/>
    </div>
  )
}

export default Product
