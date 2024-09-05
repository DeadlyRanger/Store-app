// import React from 'react'
    import list from "../list.json"

 import Cardss from "./Cardss";
import Slider from "react-slick";


const Freebook = () => {
    const filterData = list.filter((data)=> data.category === "Free");
    // console.log(filterData);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
  return (
    <>

    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>

         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cumque nisi itaque.</p>
   

      <div>
      <Slider {...settings}>
       {filterData.map((item)=>(
            <Cardss item={item} key = {item.id} />

       ))}
    
   
    </Slider>


      </div>
      </div>

      
    
    </>
  )
}

export default Freebook