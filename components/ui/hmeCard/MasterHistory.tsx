import React from "react";

const MasterHistory = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:my-12 md:my-8 ">
            {/* Section Title */}
            <div className="text-center my-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#D4AB45]">
                    Our Strength
                </h2>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Text */}
                <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4">Md. Khorshed – Master Tailor & Shop Owner</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Md. Khorshed is a highly skilled master tailor and the proud owner of the shop, bringing over 15 years of professional experience in the tailoring industry. Based in Dubai, he is widely recognized for his expertise in both men’s and ladies’ tailoring, delivering garments that combine precision, comfort, and elegant finishing.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                               With a strong commitment to quality craftsmanship, Md. Khorshed personally oversees every stage of production to ensure excellent fabric selection, perfect fitting, and long-lasting results. His shop is known for good staff management, maintaining a professional and friendly environment that guarantees consistent service quality.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">

                        Customer satisfaction is a top priority. The business offers reliable on-time delivery and operates with its own dedicated delivery service, ensuring convenience and trust for clients. Whether it’s traditional wear, formal attire, or custom designs, Md. Khorshed’s tailoring reflects experience, attention to detail, and a passion for excellence.
                    </p>
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
