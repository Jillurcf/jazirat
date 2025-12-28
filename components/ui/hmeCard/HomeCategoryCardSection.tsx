"use client";

import React from "react";
import { Card } from "antd";
import ReadMoreCatDes from "@/app/home/component/ReadMoreCatDes";

const { Meta } = Card;

const cardsData = [
  { titleEn: "Wedding Dress", titleAr: "فستان الزفاف", descriptionEn: "Wedding Attire: Delicate: Wedding outfits (such as kaftans or gowns) feature plenty of pearls, stones, lace, and embroidery.Tradition: Traditional Arabic designs blended with modern elements can be seen in wedding ceremonies.", descriptionAr: "ملابس الزفاف: راقية: تتميز ملابس الزفاف (مثل القفطان أو الفستان) بالكثير من اللؤلؤ والأحجار والدانتيل والتطريز.التقاليد: يمكن رؤية تصاميم عربية تقليدية ممزوجة بعناصر حديثة في مراسم الزفاف.", img: "/weddingDress.jpg" },
  { titleEn: "Gown", titleAr: "فستان", descriptionEn: "We create abayas and modern-designed burqas.Design: Traditional Arabic gowns or boutique wear with long, flowing silhouettes.Embroidery: Heavy embroidery on the neckline, cuffs, or hem.Stitching: Fine stitching enhances the overall finishing of the garment.", descriptionAr: "نقوم بتصميم العباءات والبراقع العصرية .التصميم: فساتين عربية تقليدية أو أزياء بوتيك تتميز بقصّات طويلة وانسيابية.التطريز: تطريز كثيف على فتحة الرقبة أو الأكمام أو الحافة السفلية. الخياطة: خياطة دقيقة تضيف لمسة نهائية أنيقة وجودة عالية للقطعة.", img: "/BannerImg3.jpg" },
  { titleEn: "Abaya", titleAr: "عباءة", descriptionEn: "We create abayas and modern-designed burqas.Design: Traditional Arabic gowns or boutique wear with long, flowing silhouettes.Embroidery: Heavy embroidery on the neckline, cuffs, or hem.Stitching: Fine stitching enhances the overall finishing of the garment.", descriptionAr: "نقوم بتصميم العباءات والبراقع العصرية .التصميم: فساتين عربية تقليدية أو أزياء بوتيك تتميز بقصّات طويلة وانسيابية.التطريز: تطريز كثيف على فتحة الرقبة أو الأكمام أو الحافة السفلية. الخياطة: خياطة دقيقة تضيف لمسة نهائية أنيقة وجودة عالية للقطعة.", img: "/Abaya1.jpg" },
  { titleEn: "Borka", titleAr: "بورك", descriptionEn: "Fabric: Soft and comfortable premium Dubai cherry, chiffon, cotton, georgette, or rayon, crafted to ensure maximum comfort. Design: From classic black or subtle plain styles to luxurious looks, we create modern cutwork and stone work with contrast embroidery in various colors (black, navy blue, pastel). Embroidery: We design garments attractively using hand or machine embroidery, lace, sequins, and stone embellishments.", descriptionAr: "القماش: شيفون، قطن، جورجيت، أو رايون، مصنوع لضمان أقصى درجات الراحة. التصميم: بدءًا من الأسود الكلاسيكي أو التصاميم البسيطة الهادئة وصولًا إلى الإطلالات الفاخرة، نقدم تطريزات بألوان متباينة (الأسود، الأزرق الكحلي، الباستيل) مع قصّات عصرية وأعمال حجرية. التطريز: نقوم بتصميم الملابس بشكل جذاب باستخدام التطريز اليدوي أو الآلي، والدانتيل، والترتر، وأعمال الأحجار.", img: "/BorkaCategory.jpg" },
  { titleEn: "Jubba", titleAr: "بورك", descriptionEn: "Fabric: Made from soft, premium-quality materials such as Dubai Cherry, chiffon, cotton, georgette, and rayon, ensuring superior comfort and breathability for everyday wear or special occasions.Design: Available in classic black, elegant plain styles, and luxurious designs. Our jubbas feature modern cuts with refined cutwork, stone detailing, and contrast embroidery in a range of colors including black, navy blue, and soft pastels. Embroidery & Detailing: Each jubba is carefully crafted using hand or machine embroidery, enhanced with lace accents, sequins, and tasteful stone embellishments for a sophisticated and graceful finish.", descriptionAr: "الخامة: مصنوعة من أقمشة ناعمة وعالية الجودة مثل دبي تشيري، الشيفون، القطن، الجورجيت، والرايون، لتوفير أقصى درجات الراحة والتهوية للاستخدام اليومي أو المناسبات الخاصة. التصميم: متوفرة باللون الأسود الكلاسيكي، والتصاميم السادة الأنيقة، بالإضافة إلى الموديلات الفاخرة. تتميز الجباب بتصميم عصري مع قصّات متقنة، وتفاصيل حجرية، وتطريز متباين بألوان متعددة مثل الأسود، الأزرق الداكن، وألوان الباستيل الهادئة. التطريز والتفاصيل: يتم تصميم كل جبّة بعناية باستخدام التطريز اليدوي أو الآلي، مع لمسات من الدانتيل، الترتر، وتزيينات حجرية أنيقة تمنحها مظهراً راقياً ومميزاً", img: "/MenDressEdited.jpg" },
];

const HomeCategoryCardSection: React.FC = () => {
  return (
    <div className="flex justify-center lg:w-[70%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 bg-gray-100">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            hoverable
            className="h-full"

            cover={
              <img
                draggable={false}
                alt={card.titleEn}
                src={card.img}
                className="lg:h-80 object-cover"
              />
            }
          >
            {/* <Meta title={card.titleEn} description={card.descriptionEn} />
            <Meta title={card.titleAr} description={card.descriptionAr} /> */}
            <h3 className="font-semibold">{card.titleEn}</h3>
            <ReadMoreCatDes text={card.descriptionEn} />

            <h3 className="font-semibold mt-2 text-right">{card.titleAr}</h3>
            <ReadMoreCatDes text={card.descriptionAr} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeCategoryCardSection;
