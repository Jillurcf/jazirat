"use client";

import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const cardsData = [
  { title: "Europe Street beat", description: "www.instagram.com", img: "/BannerImg1.jpg" },
  { title: "London Park", description: "www.instagram.com", img: "/BannerImg2.jpg" },
  { title: "New York City", description: "www.instagram.com", img: "/BannerImg3.jpg" },
  { title: "Tokyo Tower", description: "www.instagram.com", img: "/BannerImg4.jpg" },
];

const CardSection: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-around gap-6 p-6 bg-gray-100">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 240 }}
          cover={<img draggable={false} alt={card.title} src={card.img} />}
        >
          <Meta title={card.title} description={card.description} />
        </Card>
      ))}
    </div>
  );
};

export default CardSection;
