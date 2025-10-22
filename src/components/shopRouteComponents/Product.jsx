const Product = ({product}) => {
  return (
    <div className="rounded relative shadow-md h-72 w-full">
        <img src="nothing yet" alt="image here" />
        <div className="bg-neutral-950 h-20 bottom-0 w-full absolute text-center place-content-center">
            {product.name}
            <br />
            {product.price}
        </div>
    </div>
  )
}


export default Product