import React from 'react';
import FeatureItem from '../Card/FeatureItem';
import ButtonComponent from '../Component/ButtonComponent/ButtonComponent';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Features() {
  const navigate = useNavigate(); // Initialize navigate

  const FeaturedData = [
    {
      id: 1,
      image: 'https://img.freepik.com/premium-photo/gray-interior-with-dresser-decor-ai-generative_653154-3622.jpg?w=900',
      title: 'Table',
      Description: 'A luxury table is centerpiece  featuring elegant design and luxurious accents.',
    },
    {
      id: 2,
      image: 'https://img.freepik.com/premium-photo/empty-frame-cozy-modern-living-room-living-room-ai_941600-2714.jpg?uid=R155024042&ga=GA1.1.1066521216.1717933232&semt=sph',
      title: 'Couch',
      Description: 'A luxury couch combines exquisite craftsmanship and design in any living space.',
    },
    {
      id: 3,
      image: 'https://img.freepik.com/free-photo/modern-photorealistic-lamp-design_23-2151038959.jpg?t=st=1722522077~exp=1722525677~hmac=830769b372f8bf40d12c5f58536219f353b6b6d1f533509fbf56a2b831cd428e&w=1060',
      title: 'Lamp',
      Description: 'A luxury lamp exudes elegance with its refined design and high-quality materials.',
    },
    // Add more items as needed
  ];

  const handleReadMore = () => {
    navigate('/features'); // Navigate to the Features page
  };

  return (
    <>
      <div className="mt-36">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold text-cyan-950 mt-15">Featured</h1>
        </div>
        <div>
          <FeatureItem data={FeaturedData} />
        </div>
        <div className="flex justify-center pt-8">
          <ButtonComponent text="Read More" onClick={handleReadMore} />
        </div>
      </div>
    </>
  );
}

export default Features;
