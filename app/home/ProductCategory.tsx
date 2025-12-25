import React from 'react';
import { Card } from 'antd';
import HomeCategoryCardSection from '@/components/ui/hmeCard/HomeCategoryCardSection';



const ProductCategory: React.FC = () => (
    <div className='my-12 flex flex-col items-center'>
        <div className=''>
            <div className="text-center my-8">
                <h2 className="text-3xl text-[#D4AB45] font-bold">Product Categories</h2>
                <h2 className="text-3xl text-[#D4AB45] font-bold">فئات المنتجات</h2>
                <p className="text-gray-600 mt-2">Explore our diverse range of product categories</p>
                <p className="text-gray-600 mt-2">اكتشف تشكيلتنا الواسعة من فئات المنتجات</p>
            </div>
            <HomeCategoryCardSection />
        </div>
    </div>
);

export default ProductCategory;
