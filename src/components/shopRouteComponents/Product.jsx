const Product = ({product}) => {
  return (
    <div className="rounded relative shadow-md h-96 w-full">
        <img src="nothing yet" alt="image here" />
        <div className="bg-neutral-950 h-20 bottom-0 w-full absolute text-center place-content-center text-neutral-200">
          <p className="text-xl">{product.name}</p>
          <p>{product.price}</p>
        </div>
    </div>
  )
}


export default Product