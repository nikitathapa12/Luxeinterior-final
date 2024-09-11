
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import ButtonComponent from '../Component/ButtonComponent/ButtonComponent';

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
  <>
    <div className="carousel-container w-[1200px] mx-auto pt-[67px]" >
      <Slider {...settings}>
        <div className="w-full h-[500px]  relative ">
          <img src={image1} alt="Slide 1" className="carousel-image object-fit w-[1100px] h-[500px]" />
          <div className="absolute inset-0 flex  text-white bg-black bg-opacity-50">
            <div className="ml-[20px] mt-[35vh]">
            <h2 className="text-3xl font-bold">Luxuria Reclining Sofa</h2>
              <p className="text-lg ">Experience unparalleled comfort and sophistication with the Luxuria Reclining Sofa.</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
                Explore More
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[500px] relative">
          <img src={image2} alt="Slide 2" className="carousel-image object-fit w-full h-[500px]" />
          <div className="absolute inset-0 flex  text-white bg-black bg-opacity-50">
            <div className="ml-[20px] mt-[35vh]">
              <h2 className="text-3xl font-bold">Elegant Bedroom Setup</h2>
              <p className="text-lg  ">Transform your bedroom into a haven of luxury with our exquisite collection.</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
                Explore More
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[500px]  relative">
          <img src={image3} alt="Slide 3" className="carousel-image object-fit w-full h-[500px]" />
          <div className="absolute inset-0 flex  text-white bg-black bg-opacity-50">
            <div className="ml-[20px] mt-[35vh]">
              <h2 className="text-3xl font-bold">Modern Kitchen Designs</h2>
              <p className="text-lg"> 
           Discover our contemporary kitchen setups that blend functionality and style.</p>

              <button className="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-400">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  
      
    <div className=' flex' >

      
      <div className='pl-8 mt-36 ' data-aos='fade-right'>
        <img src='https://lunalightstudios.com/cdn/shop/files/2265921.jpg?v=1695806304&width=1800' className='h-[500px] w-[500px] rounded-[20px]'/>
      </div>

    
      <div className='flex flex-col mt-44 ml-32'  >
        <h2 className="text-5xl font-bold text-blue-950" data-aos='fade-left'>We design thoughtful,<br/>
          liveable spaces.</h2>
          <p  className='pt-5 text-blue-950 text-lg' data-aos='fade-left'>
            Our designs blend beauty and functionality,creating spaces <br/>
            that reflect your unique style while enhancing everyday comfort. <br/>
             We prioritize thoughtful details to transform your living experience.
          </p>
        <div className='mt-4' data-aos='fade-up'>
          <ButtonComponent text="Read More" />
        </div>
        
      </div>   

    </div>


  

  </>
  );
}

export default HomeCarousel;


