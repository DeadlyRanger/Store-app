

const Cardss =  ( {item} ) => {
            console.log(item.title);
   return (
      <>
      <div className="mt-4 my-5 py-10 px-10">
      <div className="card bg-base-100 w-96 shadow-xl  border-2 hover:scale-105 duration-300">
  <figure>
    <img
      src= {item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl">
            {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className=" cursor-pointer px-4 py-1  rounded-lg border-[2px]  hover:bg-pink-500 hover:text-white " >Buy Now</div>
    </div>
  </div>
</div>
</div>
      
      </>
  )
}
  

export default Cardss