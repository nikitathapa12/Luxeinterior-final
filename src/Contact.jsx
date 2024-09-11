import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from './Component/ButtonComponent/ButtonComponent';
import FooterComponent from './Footer/Footer';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await axios.post('http://localhost:3000/api/contact', formData);
      setSuccessMessage('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Clear the success message after 10 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 10000);
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const data = [
    {
      id: 1,
      image: "https://png.pngtree.com/png-vector/20230414/ourmid/pngtree-living-room-line-icon-vector-png-image_6706453.png",
      title: "Modern Living Area",
      description: "Iterative methods of developing the corporate ",
    },
    {
      id: 2,
      image: "https://static.thenounproject.com/png/3535152-200.png",
      title: "Interior Design",
      description: "We create the complete set of project information.",
    },
    {
      id: 3,
      image: "https://cdn.iconscout.com/icon/free/png-256/free-3d-design-2043304-1724572.png",
      title: "3D Design Layouts",
      description: "Iterative methods of developing the corporate strategy.",
    },
    {
      id: 4,
      image: "https://cdn-icons-png.flaticon.com/512/312/312688.png",
      title: "Remodel Spaces",
      description: "We create the complete set of project information.",
    },
  ];

  return (
    <>
      <div className='relative h-[500px] w-[75rem] ml-[2.5rem] bg-cover bg-center rounded-[10px] overflow-hidden' style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/living-room-with-couch-table-lamp_779887-136.jpg?uid=R155024042&ga=GA1.1.1066521216.1717933232")' }}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative flex flex-col pt-[200px] pl-5 text-center'>
          <h1 className='text-2xl font-bold text-white text-center'><Link to='/'>HOME</Link> / Contact</h1>
          <h5 className='text-white'>Contact</h5>
        </div>
      </div>

      <div className='flex justify-evenly'>
        {data.map((card) => (
          <div key={card.id} className='bg-gray-200 h-[180px] w-[250px] ml-10 rounded-[10px] mt-[80px]' id='card'>
            <div className='flex gap-2'>
              <img src={card.image} className='rounded-[30%] h-[80px]' />
              <h1 className='text-lg font-bold pt-5'>{card.title}</h1>
            </div>
            <div className='h-[1px] bg-gray-300 w-[250px] mt-2'></div>
            <p className='text-sm pt-5 pl-4'>{card.description}</p>
          </div>
        ))}
      </div>

      <div className='flex'>
        <div className='text-amber-950 ml-10 pt-20 text-xl'>
          <div className='flex flex-col gap-2'>
            <h2>Contact Us</h2>
            <h1 className='text-5xl font-bold'>Happy to answer all <br /> your questions</h1>
            <p className='pt-4'>
              Welcome to LuxeInterior, where luxury and elegance meet <br />
              exceptional customer service. We're here to assist you <br />
              with all your interior decor needs.
            </p>
          </div>
        </div>

        <div className='mt-[80px] ml-10 border rounded-[20px] shadow-md shadow-slate-700'>
          <div className='bg-beige-100 h-[33rem] w-[40rem] rounded-[12px] p-8'>
            <h1 className='text-amber-950 text-3xl font-bold text-center'>Send a Message</h1>
            <form onSubmit={handleSubmit}>
              <div className='text-center'>
                {successMessage && <p className='text-green-600'>{successMessage}</p>}
                {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
              </div>
              <div className='mt-7'>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full h-[10rem] rounded-[10px] p-5 border border-gray-300"
                  required
                />
              </div>
              <div className='mt-10 flex gap-5'>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Name'
                  className='w-[18rem] h-[4rem] rounded-[10px] p-4 border border-gray-300'
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Email'
                  className='w-[18rem] h-[4rem] rounded-[10px] p-4 border border-gray-300'
                  required
                />
              </div>
              <div className='mt-8 flex gap-5'>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Phone'
                  className='w-[18rem] h-[4rem] rounded-[10px] p-4 border border-gray-300'
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Subject'
                  className='w-[18rem] h-[4rem] rounded-[10px] p-4 border border-gray-300'
                  required
                />
              </div>
              <div className='text-black flex justify-center mt-5'>
                <ButtonComponent text={isSubmitting ? "Submitting..." : "Submit"} className="text-center" disabled={isSubmitting} />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <iframe width="100%" height="500" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kathmandu,Nepal+(MotorsNepal)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>

      <FooterComponent />
    </>
  );
}

export default Contact;
