import React from 'react'
import { Button } from "../button";

const CallingSection = () => {
    return (
        <div className='items-center'>
            <h4 className="text-xl text-center sm:text-lg font-bold text-gray-300] mt-[2%]">
                You can call our MASTER TAILOR using English, Arabic, Urdu or Hindi language
            </h4>
            <h4 className="text-xl text-center sm:text-lg font-bold text-[#D4AB45]">
                يمكنك الاتصال بحرفينا الرئيسي باستخدام اللغة الإنجليزية أو العربية أو الأردية أو الهندية
            </h4>

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
        </div>
    )
}

CallingSection.propTypes = {}

export default CallingSection