// "use client"

// import React from "react"
// import { Carousel } from "antd"
// import Image from "next/image"

// const images = [
//     "/BannerImg5.jpg",
//   "/BannerOriginal.jpg",
//   "/BannerImg1.jpg",
//   "/BannerImg2.jpg",
//   "/BannerImg3.jpg",
//   "/BannerImg4.jpg",
//   "/BannerImg7.jpg",
// ]

// const Banner: React.FC = () => {
//   return (
//     <Carousel arrows autoplay autoplaySpeed={5000}>
//       {images.map((src, index) => (
//         <div key={index} className="w-full h-[60vh] relative">
//           <Image
//             src={src}
//             alt={`Banner ${index + 1}`}
//             fill
//             style={{ objectFit: "cover" }}
//             priority
//           />
//         </div>
//       ))}
//     </Carousel>
//   )
// }

// export default Banner


"use client"

import React from "react"
import { Carousel } from "antd"
import Image from "next/image"

const Banner: React.FC = () => {
  const desktopImages = [
  "/BannerImg5.jpg",
  "/BannerOriginal.jpg",
  "/BannerImg1.jpg",
  "/BannerImg2.jpg",
  "/BannerImg3.jpg",
  "/BannerImg4.jpg",
  "/BannerImg7.jpg",
]

const mobileImages = [
   "/BannerImg5.jpg",
 "/imge33Edited.jpg",
  "/BannerImg1.jpg",
  "/BannerImg2.jpg",
  "/BannerImg3.jpg",
  "/BannerImg4.jpg",
  "/BannerImg7.jpg",
]

  return (
    <>
      {/* Desktop / Tablet */}
      <div className="hidden md:block">
        <Carousel arrows autoplay autoplaySpeed={5000}>
          {desktopImages.map((src, index) => (
            <div key={index} className="w-full h-[60vh] relative">
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                fill
                priority
                className="object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <Carousel autoplay autoplaySpeed={5000}>
          {mobileImages.map((src, index) => (
            <div key={index} className="w-full h-[40vh] relative">
              <Image
                src={src}
                alt={`Mobile Banner ${index + 1}`}
                fill
                priority
                className="object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default Banner
