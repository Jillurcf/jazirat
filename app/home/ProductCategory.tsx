import React from 'react';
import { Card } from 'antd';
import CardSection from '@/components/ui/hmeCard/CardSection';


const ProductCategory: React.FC = () => (
    <div className='my-12 flex flex-col items-center'>
        <div className=''>
            <div className="text-center my-8">
                <h2 className="text-3xl text-[#D4AB45] font-bold">Product Categories</h2>
                <p className="text-gray-600 mt-2">Explore our diverse range of product categories</p>
            </div>
            <CardSection />
        </div>
    </div>
);

export default ProductCategory;
