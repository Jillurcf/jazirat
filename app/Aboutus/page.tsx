
'use client'
import React from 'react'
import WhatWeDo from './WhatWeDo'
import OurResources from './OurResources'
import ReadMoreCatDes from '../home/component/ReadMoreCatDes'

const page = () => {
  const text = ` Welcome to Jazirat Tailoring Shop, your trusted destination for high-quality tailoring services. Established with a commitment to excellence, we specialize in creating bespoke garments that blend traditional craftsmanship with modern styles. Our skilled team of tailors is dedicated to delivering exceptional quality and personalized service to meet the unique needs of each customer.
  
  At Jazirat Tailoring Shop, we pride ourselves on our attention to detail and our ability to bring your fashion visions to life. Whether you're looking for custom-made clothing for special occasions or everyday wear, we are here to provide you with garments that fit perfectly and reflect your personal style. Thank you for choosing Jazirat Tailoring Shop – where quality meets tradition.  `


  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:my-12 md:my-8 mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#D4AB45]">
                About Us</h2>
          <h4 className="text-xl sm:text-lg font-bold text-gray-300] mt-[2%]">
                Learn more about our company...</h4>
            <ReadMoreCatDes text={text} maxWords={50}/>
      </div>
      <WhatWeDo />
      <OurResources />
      </div>
  )
}

export default page