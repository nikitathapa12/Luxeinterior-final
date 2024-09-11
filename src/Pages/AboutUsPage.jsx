import React from 'react';
import { FaStar } from 'react-icons/fa';
import FooterComponent from '../Footer/Footer';

const AboutUsPage = () => {
  const decorItems = [
    {
      id: 1,
      image: 'https://i.pinimg.com/564x/7e/dd/72/7edd72e072076fda3d8eac7bfdf44dbb.jpg',
      title: 'Opulent Velvet Sofa',
      description: 'Indulge in the ultimate luxury with our Opulent Velvet Sofa. This elegant and plush piece is crafted from premium velvet fabric, offering unparalleled comfort and sophistication. Its rich texture and refined design make it a perfect centerpiece for any upscale living space, combining timeless style with modern elegance.'
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/564x/e8/66/ec/e866ec14c40950674307447127a8dc32.jpg',
      title: 'Contemporary Artisan Coffee Table',
      description: 'Elevate your living area with the Contemporary Artisan Coffee Table. This sleek and stylish piece is crafted from high-quality, sustainably sourced wood, featuring a minimalist design with a touch of modern flair. Its clean lines and understated elegance make it an ideal choice for adding a sophisticated touch to any room.'
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/564x/0c/1a/e5/0c1ae59637b49f45f628fa3077089fbb.jpg',
      title: 'Refined Luxury Wall Art',
      description: 'Transform your space with our Refined Luxury Wall Art. This stunning piece adds a touch of glamour and sophistication to any room, with intricate detailing and a striking design that enhances your home decor. Perfect for creating a focal point in your living area or bedroom, it embodies a blend of classic and contemporary aesthetics.'
    },
  ];
  

  const testimonials = [
    { id: 1, name: 'Jane Doe', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'LuxeInterior transformed my living room into a modern oasis. Their products are top-notch!' },
    { id: 2, name: 'John Smith', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'The quality of the furniture is exceptional, and the customer service was outstanding.' },
    { id: 3, name: 'Emily Johnson', image: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Beautiful designs and great attention to detail. Highly recommend LuxeInterior!' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-16 px-4">
        
        {/* Hero Section */}
        <section className="mb-16 text-center mt-12">
 
            
            <div className="flex items-center justify-center ml-4 gap-20">
                <div className="relative w-[450px] h-[500px]">
                  <img src="https://i.pinimg.com/474x/ed/27/8a/ed278a1c53d6fe378cd8b9a386a030e1.jpg" alt="Hero" className="w-full h-full object-cover rounded-lg shadow-lg" />
                </div>
                <div className="ml-8 max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-4 font-serif">Opulent Elegance: Discover Our Luxurious Furniture Collection</h1>
                  <p className="text-lg font-medium text-gray-700">
                    Discover our collection of exquisite furniture designed to bring elegance and comfort to your home. Our range features pieces crafted from natural fabrics that enhance both style and durability. Whether you’re looking for a statement sofa, a chic coffee table, or refined decor accents, each item in our collection embodies timeless beauty and quality craftsmanship. 
                  </p>
               </div>
              </div>
          </section>



        {/* About Us Section */}
        <section className="mb-16">
  <div className="flex flex-wrap justify-center items-center mb-12">
    <div className="w-[350px] md:w-6/12 lg:w-4/12 p-4">
      <img 
        src="https://i.pinimg.com/474x/ec/4d/72/ec4d72acf3bf0e0b60d81198f33df904.jpg" 
        alt="Decor" 
        className="w-[350px] h-[450px] object-cover rounded-lg shadow-lg"
      />
    </div>
    <div className="w-[350px] md:w-6/12 lg:w-4/12 p-4">
      <img 
        src="https://i.pinimg.com/474x/eb/6e/5d/eb6e5d9edde8568f6aab5a49f40fd82e.jpg" 
        alt="Decor" 
        className="w-[350px] h-[450px] object-cover rounded-lg shadow-lg"
      />
    </div>
    <div className="w-[350px] md:w-6/12 lg:w-4/12 p-4">
      <img 
        src="https://i.pinimg.com/474x/f5/fc/76/f5fc7696313b8ae21f6808d597626a7c.jpg" 
        alt="Decor" 
        className="w-[350px] h-[450px] object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
  <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Creating Perfect Lines and Imposing Presence</h2>
  <p className="text-gray-600 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
    Developed the concept of exclusivity & Arturia features timeless furniture, with natural fabrics, curved lines, plenty mirrors and classic design, which can be incorporated into any decor project. 
  </p>
</section>

       {/* Decor Items Section */}
       <section className="mb-16">
  <div className="space-y-8">
    {decorItems.map((item, index) => (
      <div
        key={item.id}
        className={`flex items-center bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
      >
        <div className="w-[500px] h-[500px] p-4">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="w-[calc(50%-2rem)] p-8">
          <h3 className="text-2xl font-semibold mb-4 text-slate-900">{item.title}</h3>
          <p className="text-base text-gray-700">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>



        {/* Testimonials Section */}
        <section className="py-16 bg-mint-green-100">
  <h2 className="text-4xl font-bold text-navy-blue text-center mb-12 relative">
    <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-mint-green-300 to-beige-400"></span>
    <span className="relative">Customer Testimonials</span>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
    {testimonials.map((testimonial, index) => (
      <div key={testimonial.id} className="relative bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl group">
        <div className="absolute inset-0 bg-gradient-to-r from-beige-200 to-mint-green-300 opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6">
            <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover border-4 border-mint-green-300 shadow-md" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-navy-blue mb-2">{testimonial.name}</h3>
            <div className="text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="inline" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>




      </div>

      <FooterComponent/>
    </div>
  );
};

export default AboutUsPage;
