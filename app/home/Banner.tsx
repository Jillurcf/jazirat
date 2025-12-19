"use client"

import React from "react"
import { Carousel } from "antd"
import Image from "next/image"

const images = [
  "/BannerImg5.jpg",
  "/BannerImg1.jpg",
  "/BannerImg2.jpg",
  "/BannerImg3.jpg",
  "/BannerImg4.jpg",
  "/BannerImg7.jpg",
]

const Banner: React.FC = () => {
  return (
    <Carousel arrows autoplay autoplaySpeed={5000}>
      {images.map((src, index) => (
        <div key={index} className="w-full h-[60vh] relative">
          <Image
            src={src}
            alt={`Banner ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      ))}
    </Carousel>
  )
}

export default Banner
