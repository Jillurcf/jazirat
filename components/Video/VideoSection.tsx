"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function VideoSection() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-0">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center my-8 md:my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#D4AB45]">
            What We Offer
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold text-[#D4AB45] mt-1">
            ماذا نقدم
          </h2>

          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Explore our diverse range of product categories
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            اكتشف تشكيلتنا الواسعة من فئات المنتجات
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">

          {/* Video */}
          <Card className="w-full lg:w-1/2">
            <CardContent className="p-4">
              <div className="aspect-video w-full">
                <video
                  className="w-full h-full rounded-lg object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="https://www.youtube.com/watch?v=b4a5ZaHR51g" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </CardContent>
          </Card>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
           

            <p className="text-gray-700 lg:text-2xl text-sm md:text-base leading-relaxed">
              We specialize in crafting elegant Arabic women’s garments that
              combine tradition with modern design. Our services include
              custom-made abayas, kaftans, jalabiyas, and modest wear tailored to
              perfection. We use premium fabrics, detailed hand embroidery, and
              precise stitching to ensure comfort, elegance, and long-lasting
              quality.
            </p>

            <p className="text-gray-700 lg:text-2xl text-sm md:text-base leading-relaxed text-right">
              نحن متخصصون في تصميم وخياطة أزياء نسائية عربية أنيقة تجمع بين
              التراث والتصاميم العصرية. نقدم خدمة التفصيل حسب الطلب للعبايات،
              القفاطين، الجلابيات، والملابس المحتشمة، باستخدام أقمشة فاخرة
              وتطريز يدوي متقن وخياطة دقيقة. نحرص على تقديم قطع مريحة وعالية
              الجودة تعكس الأصالة العربية وتواكب أحدث صيحات الموضة.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
