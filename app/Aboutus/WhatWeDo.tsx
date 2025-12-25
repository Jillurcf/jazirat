import React from 'react'
import ReadMoreCatDes from '../home/component/ReadMoreCatDes'

const WhatWeDo = () => {
    const textEn = `  We accept all kinds of sewing machine work orders. We make coats, pants, sarees, lehengas, and a blend of modern and traditional styles. We work with fabrics suitable for stone work, sequins, and silk embroidery, such as Dubai cherry, chiffon, and cotton fabrics, all carefully stitched by skilled craftsmen.

                        We produce boutique and designer garments, especially Arabic women’s clothing such as abayas, jubbahs, boutique wear, and wedding dresses. These garments are usually made with fine designs, featuring hand or machine embroidery, and comfortable fabrics like Dubai cherry. Our designs combine tradition and modernity, and special attention is given to stitching quality and design details to enhance the beauty of the garments, particularly wedding dresses.

                        We also keep these garments in our shop for sale.`

    const textAr = ` نحن نقبل جميع أنواع طلبات أعمال الخياطة باستخدام ماكينات الخياطة. نقوم بتصميم وخياطة المعاطف، والبناطيل، والساري، واللينغا، ونقدم مزيجًا من التصاميم العصرية والتقليدية. نستخدم أقمشة مناسبة لأعمال الأحجار، والترتر، والتطريز الحريري مثل قماش دبي تشيري، والشيفون، والأقمشة القطنية، ويتم خياطتها بعناية على أيدي حرفيين مهرة.

                        نقوم بتصنيع ملابس البوتيك والملابس المصممة خصيصًا، وخاصة ملابس النساء العربيات مثل العبايات، والجُبَب، وملابس البوتيك، وفساتين الزفاف. تتميز هذه الملابس عادةً بتصاميم دقيقة، وتطريز يدوي أو آلي، مع استخدام أقمشة مريحة مثل دبي تشيري. تجمع تصاميمنا بين الأصالة والحداثة، مع الاهتمام الكبير بجودة الخياطة والتصميم لإبراز جمال الملابس، وخاصة فساتين الزفاف.

                        كما نقوم بعرض هذه الملابس للبيع في متجرنا.`
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:my-12 md:my-8 mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#D4AB45]">
                What We Do
            </h2>
            <h4 className="text-xl sm:text-lg font-bold text-gray-300] mt-[2%]">
                Details about what we do...
            </h4>

            <div className="lg:flex flex-1 justify-between gap-6">

                {/* Text Section */}
                <div className="flex-1">
                    <ReadMoreCatDes text={textEn} maxWords={50} />
                    <ReadMoreCatDes text={textAr} maxWords={50} />
                </div>

                {/* Image Section */}
                <div className="w-full flex-1 lg:w-full flex justify-center items-start lg:items-center">
                    <img
                        src="/imge33Edited.jpg"
                        alt="image"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

            </div>
        </div>

    )
}

export default WhatWeDo