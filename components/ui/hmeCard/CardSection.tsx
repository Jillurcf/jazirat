"use client";

import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const cardsData = [
  { title: "Hijab", description: "", img: "/BannerImg1.jpg" },
  { title: "Kurti", description: "", img: "/BannerImg2.jpg" },
  { title: "Gown", description: "", img: "/BannerImg3.jpg" },
  { title: "Abaya", description: "", img: "/Abaya1.jpg" },
  { title: "Borka", description: "", img: "/BorkaCategory.jpg" },
];

const CardSection: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-around gap-6 p-6 bg-gray-100">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 240, }}
          cover={<img draggable={false} alt={card.title} src={card.img} />}
        >
          <Meta title={card.title} description={card.description} />
        </Card>
      ))}
    </div>
  );
};

export default CardSection;
