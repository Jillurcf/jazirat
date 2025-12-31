import React from 'react'

const Materials = [
  "/Materials/MaterialsEdited.png",
  "/Materials/Materials1.jpeg",
  "/Materials/Materials2.jpeg",
  "/Materials/Materials3.jpeg",
  "/Materials/Materials4.jpeg",
  "/Materials/Materials5.jpeg",
  "/Materials/Materials6.jpeg",
  "/Materials/Materials7.jpeg",
  "/Materials/Materials8.jpeg",
]

const MaterialsAndTech = () => {
  return (
    <div className="p-4 max-w-[70%] items-center mx-auto">
         <h2 className="text-3xl text-[#D4AB45] text-center mt-12 font-bold py-6">Materials We Use</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Materials.map((item, index) => (
          <div key={index} className="w-full h-52">
            <img 
              src={item} 
              alt={`material-${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MaterialsAndTech;
