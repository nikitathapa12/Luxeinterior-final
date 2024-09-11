import React from 'react'
import FeatureItem from '../Card/FeatureItem'
import FooterComponent from '../Footer/Footer'
import ButtonComponent from '../Component/ButtonComponent/ButtonComponent'



function Features() {

  const FeaturedData=[
    {
      id:1,
      image:"https://img.freepik.com/premium-photo/gray-interior-with-dresser-decor-ai-generative_653154-3622.jpg?w=900",
      title:"Table",
      Description:"A luxury table is centerpiece  featuring elegant design and luxurious accents."
    },  
    {
      id:2,
      image:"https://img.freepik.com/premium-photo/empty-frame-cozy-modern-living-room-living-room-ai_941600-2714.jpg?uid=R155024042&ga=GA1.1.1066521216.1717933232&semt=sph",
      title:"Couch",
      Description:"A luxury couch combines exquisite craftsmanship and design in any living space."
  
    },
  
    {
      id:3,
      image:"https://i.pinimg.com/564x/75/66/24/756624c2e34281f139cef75e8b58d192.jpg",
      title:"Bed",
      Description:"A luxury lamp exudes elegance with its refined design and high-quality materials."    
    },
  
    

    {
      id:4,
      image:"https://i.pinimg.com/564x/23/64/16/2364160a16e30cb0bf1ea80c954dea3d.jpg",
      title:"Dinning Table",
      Description:"A luxury lamp exudes elegance with its refined design and high-quality materials."    
    },
    {
      id:5,
      image:"https://img.freepik.com/free-photo/view-futuristic-light-lamp-design_23-2151037552.jpg?uid=R155024042&ga=GA1.1.1066521216.1717933232",
      title:"Lamp",
      Description:"A luxury lamp exudes elegance with its refined design and high-quality materials."    
    },

    
    {
      id:6,
      image:"https://i.pinimg.com/564x/9c/61/41/9c6141463cdc84204ab777331a6d0622.jpg",
      title:"Chair",
      Description:"A luxury lamp exudes elegance with its refined design and high-quality materials."    
    },

    

    {
      id:6,
      image:"https://i.pinimg.com/564x/a5/d3/15/a5d315d66195dcae563e773b42100d3c.jpg",
      title:"Table",
      Description:"A luxury lamp exudes elegance with its refined design and high-quality materials."    
    },
    

    {
      id:7,
      image:"https://i.pinimg.com/564x/64/d5/72/64d572308bdde6f71596f65c7805dadb.jpg",
      title:"Decor",
      Description:"A luxury lamp exudes elegance with its refined design and high-quality materials."    
    },

    {
      id:7,
      image:"https://i.pinimg.com/736x/a2/61/ed/a261ed0d8b114ae97727a65d9ce9eb3a.jpg",
      title:"Decor",
      Description:"A luxury lamp exudes elegance with its refined design and high-quality materials."    
    },
  

    
    
  
  ]
  return (
    <> 
      <div>
        <div className="flex justify-center pt-5">
         <h1 className='text-3xl font-bold text-cyan-900  '>
          Featured 
          </h1> 
        </div>
        <div className='flex' >
        
            <FeatureItem data={FeaturedData}/>
            
        </div>
       
      </div>

      <FooterComponent/>
     


    </>
  )
}

export default Features