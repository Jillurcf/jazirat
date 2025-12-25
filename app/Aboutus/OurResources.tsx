import React from 'react'
import ReadMoreCatDes from '../home/component/ReadMoreCatDes'

const OurResources = () => {
    const textEn = `Our tailoring shop is supported by a dedicated team of professionals. We have 10 skilled and experienced tailoring staff who ensure high-quality workmanship, along with 2 delivery personnel responsible for timely and reliable order delivery. In total, our shop operates with a team of 12 staff members.

    For efficient and regular delivery services, we are equipped with two dedicated vans to ensure safe and on-time delivery of our garments.
    `
    const textAr = `  يعتمد محل الخياطة لدينا على فريق عمل محترف ومتكامل. يضم فريقنا 10 من العمال المهرة وذوي الخبرة في مجال الخياطة، إلى جانب موظفي توصيل عددهم 2، يحرصون على تسليم الطلبات بدقة وفي الوقت المحدد. ويعمل في متجرنا ما مجموعه 12 موظفًا.

                        ولتقديم خدمات توصيل منتظمة وفعّالة، نوفر سيارتين مخصصتين (فان) لضمان توصيل الملابس بأمان وفي الوقت المناسب`

    const textSummeryEn = ` Arabic women’s fashion beautifully blends tradition and modern elegance, using premium-quality fabrics, attractive embroidery, and refined tailoring that reflect culture, sophistication, and personal taste.

                    Craftsmanship:
                    Our skilled artisans create intricate hand embroidery with fine detailing and sequins, giving each garment a graceful and luxurious appearance.

                    Style:
                    Our boutique designs combine traditional local motifs with contemporary international trends, creating timeless yet fashionable outfits.

                    Stitching & Finishing:
                    Precise stitching ensures durability, comfort, and a flawless finish in every piece.

                    Through our continuous dedication and hard work, we have gained wide popularity and customer trust over the past two years, leading to strong business growth. We are now aiming to expand our brand into the European and American markets.`

    const textSummeryAr = `تجمع أزياء المرأة العربية بين الأصالة والحداثة، باستخدام أقمشة عالية الجودة، وتطريز جذاب، وخياطة متقنة تعكس الثقافة والرقي والذوق الرفيع.

                    الحِرفية:
                    يقوم حرفيونا المهرة بتنفيذ تطريز يدوي دقيق مع تفاصيل راقية وترصيع بالترتر، مما يمنح كل قطعة مظهرًا أنيقًا وفخمًا.

                    الأسلوب:
                    تُصمَّم أزياء البوتيك لدينا من مزيج متناغم بين الزخارف المحلية التقليدية والاتجاهات العالمية الحديثة.

                    الخياطة والتشطيب:
                    نحرص على خياطة دقيقة لضمان المتانة والراحة والتشطيب المثالي لكل قطعة.

                    وبفضل جهودنا المستمرة وعملنا الدؤوب، حققنا خلال العامين الماضيين انتشارًا واسعًا وثقة كبيرة من العملاء، مما ساهم في نمو أعمالنا بشكل ملحوظ. ونسعى حاليًا إلى توسيع نشاطنا ليشمل الأسواق الأوروبية والأمريكية
    `
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:my-12 md:my-8 mb-4">

            <div className='lg:flex justify-between gap-4'>
                <div className='flex-1'>
                    <img src="/Car.jpg" alt="" className="w-[90%] h-auto object-cover rounded-lg" />
                </div>
                <div className='flex-1'>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#D4AB45]">
                        Our Resources</h2>
                    <h4 className="text-xl sm:text-lg font-bold text-gray-300] mt-[2%]">
                        Details about our resources...</h4>
                    <ReadMoreCatDes text={textEn} maxWords={50} />
                    <ReadMoreCatDes text={textAr} maxWords={50} />

                </div>

            </div>
            {/* summery */}
            <div className="mt-8">
                <h3 className="text-xl font-bold text-[#D4AB45]">Summary</h3>
                <ReadMoreCatDes text={textSummeryEn} maxWords={50} />
                <ReadMoreCatDes text={textSummeryAr} maxWords={50} />

            </div>
        </div>
    )
}

export default OurResources