import { Link } from "react-router-dom"

const Product = () => {
  return (
    <div>
        <div className="flex justify-center items-center gap-4">
            <Link className="underline" to='/product/men'>Men's</Link>
            <Link className="underline"  to='/product/women'>Womens</Link>
        </div>
      <h1 className="absolute top-[30%] left-[50%] transform -translate-x-1/2 translate-y-1/2 text-8xl underline">Product Page</h1>
    </div>
  )
}

export default Product
