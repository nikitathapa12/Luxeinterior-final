import React from 'react'
import ShopData from '../Card/ShopData'


const ShopSection = () => {
  const componentData=[
    {
      id: 1,
      image:"https://img.freepik.com/premium-photo/beautiful-apartment-sofa-chair-dining-table-wall-mockup-interior-design-modern-living-room_1240590-3421.jpg?uid=R155024042&ga=GA1.1.1066521216.1717933232&semt=ais_hybrids",
      title: "Cupboard",
      price: "$10.00",
    },

    {
      id: 2,
      image:"https://img.freepik.com/premium-photo/meroni-colzani-wardrobe-precise-height-ultra-realistic-visual-design_899449-620515.jpg?uid=R155024042&ga=GA1.1.1066521216.1717933232&semt=ais_hybrid",
      title: "Wardrobe",
      price: "$10.00",
    },

    {
      id: 3,
      image:"https://img.freepik.com/free-photo/room-background-with-interior-decor-white-walls_23-2151020042.jpg?uid=R155024042&ga=GA1.1.1066521216.1717933232&semt=ais_hybrid",
      title: "Product 1",
      price: "$10.00",
    },

    {
      id: 4,
      image:"https://img.freepik.com/free-photo/modern-entryway-with-furniture-home-decor_23-2150831801.jpg?uid=R155024042&ga=GA1.1.1066521216.1717933232&semt=ais_hybrid",
      title: "Table",
      price: "$10.00",
    },
   

  ]
  return (
    <>
    <div className='flex flex-col justify-center items-center mt-36' >
      
        <h1 className='text-3xl font-bold text-center text-cyan-950 '>Shop</h1>

      
    </div>
      <ShopData data={componentData}/>


    </>
  )
}

export default ShopSection