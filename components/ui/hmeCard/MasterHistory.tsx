
"use client"
import React from "react";
import { Button } from "../button";
import ReadMoreCatDes from "@/app/home/component/ReadMoreCatDes";

const MasterHistory = () => {
    const aboutMastr = `
     
                        Md khorshed Alam is a highly skilled master tailor and the proud owner of the shop, bringing over 15 years of professional experience in the tailoring industry. Based in Dubai, he is widely recognized for his expertise in both men’s and ladies’ tailoring, delivering garments that combine precision, comfort, and elegant finishing.
                 
                  
                        With a strong commitment to quality craftsmanship, Md khorshed Alam personally oversees every stage of production to ensure excellent fabric selection, perfect fitting, and long-lasting results. His shop is known for good staff management, maintaining a professional and friendly environment that guarantees consistent service quality.
                 
                   

                        Customer satisfaction is a top priority. The business offers reliable on-time delivery and operates with its own dedicated delivery service, ensuring convenience and trust for clients. Whether it’s traditional wear, formal attire, or custom designs, Md khorsed Alam’s tailoring reflects experience, attention to detail, and a passion for excellence.
                   `

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:my-12 md:my-8 ">
            {/* Section Title */}
            <div className="text-center my-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#D4AB45]">
                    Our Strength
                </h2>
                <h4 className="text-xl sm:text-lg font-bold text-gray-300] mt-[2%]">
                    You can call our MASTER TAILOR using English, Arabic, Urdu or Hindi language
                </h4>
                <h4 className="text-xl sm:text-lg font-bold text-[#D4AB45]">
                    يمكنك الاتصال بحرفينا الرئيسي باستخدام اللغة الإنجليزية أو العربية أو الأردية أو الهندية
                </h4>
            </div>
            <div className="text-center mb-6">
                <div className="mb-4">
                    <img src="/CallImg.png" alt="decorative line" className="mx-auto" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button
                        style={{ backgroundColor: "#D4AB45", color: "#FFFFFF" }}
                        onClick={() => window.location.href = "tel:+96898765355"}
                    >
                      +96898765355
                    </Button>

                    <Button
                        style={{ backgroundColor: "#D4AB45", color: "#FFFFFF" }}
                       onClick={() => window.location.href = "tel:+96898765355"}
                    >
                        ٠٩٦٨٩٨٧٦٥٣٥٥
                    </Button>


                    <Button
                        style={{ backgroundColor: "#D4AB45", color: "#FFFFFF" }}
                        onClick={() => window.location.href = "tel:+96898765355"}
                    >
                       ۰۹۶۸۹۸۷۶۵۳۵۵
                    </Button>

                    <Button
                        style={{ backgroundColor: "#D4AB45", color: "#FFFFFF" }}
                        onClick={() => window.location.href = "tel:+96898765355"}
                    >
                        ०९६८९८७६५३५५
                    </Button>
                </div>

            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Text */}
                <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4">Md khorshed Alam – Master Tailor & Shop Owner</h3>
                    <ReadMoreCatDes text={aboutMastr} maxWords={50} />
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/Master.jpg"
                        alt="Our Master"
                        className="w-full max-w-md rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default MasterHistory;
