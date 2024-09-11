import React from 'react';

const About = () => {
  const data = [
    {
      id: 1,
      image: "https://cdn-icons-png.freepik.com/256/4102/4102704.png?uid=R155024042&ga=GA1.2.1066521216.1717933232&semt=ais_hybrid",
      title: "5 Years Warranty",
      description: "We offer competitive and affordable\nrates for our interior design."
    },
    {
      id: 2,
      image: "https://cdn-icons-png.freepik.com/256/10616/10616523.png?uid=R155024042&ga=GA1.2.1066521216.1717933232&semt=ais_hybrid",
      title: "Latest technologies",
      description: "We offer competitive and affordable\nrates for our interior design."
    },
    {
      id: 3,
      image: "https://cdn-icons-png.freepik.com/256/13139/13139146.png?uid=R155024042&ga=GA1.2.1066521216.1717933232&semt=ais_hybrid",
      title: "High-Quality Designs",
      description: "We offer competitive and affordable\nrates for our interior design."
    }
  ];

  return (
    <>
      <div className='pt-36 pl-5'>
        <h1 className='text-blue-950 text-5xl'>Why Choose Us!</h1>
      </div>

      <div className='flex flex-col pt-10 pl-7 gap-10 m-[2rem]'>
        {data.map((card) => (
          <div key={card.id} className='flex'>
            <div className='ml-[5rem]'>
              <img src={card.image} className='rounded-[50%] h-[55px] w-[55px] border border-black ' />
            </div>
            <div className='pl-4 '>
              <h1 className='text-xl text-blue-950'>{card.title}</h1>
              <p style={{ whiteSpace: 'pre-line' }}>{card.description}</p>
            </div>
          </div>
          
        ))}

        <div className='flex justify-center mt-[-29rem] ml-[30rem]'>
          <img src='https://xinterio-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/05/ih-single-img-01.png' className='h-[500px]' id='About' />
        </div>

        

      </div>


    </>
  );
};

export default About;
