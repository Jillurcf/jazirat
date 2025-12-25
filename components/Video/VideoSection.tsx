"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function VideoSection() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-0">
      <div className="max-w-6xl mx-auto">


        {/* Content */}
        <div className="lg:flex gap-14">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#D4AB45]">
              What We Offer
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-[#D4AB45] mt-1">
              ماذا نقدم
            </h2>
            {/* Video */}
            <Card className="w-full mt-[4%]">
              <CardContent className="p-4">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/06BRt8JOkTs"

                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>


            {/* Text Content */}


          </div>
          <div className="flex-1 lg:mt-0  mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#D4AB45]">
              Our Work Environment
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-[#D4AB45]  mt-1">
              ماذا نقدم
            </h2>
            {/* Video */}
            <Card className="w-full mt-[4%]">
              <CardContent className="p-4">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/7wlnU9EsJmA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>


            {/* Text Content */}


          </div>
        </div>
      </div>
    </section>
  )
}
