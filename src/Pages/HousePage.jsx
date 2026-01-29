import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const HousePage = () => {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    setLoading(true);
    fetch('/db.json')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        const houses = Array.isArray(data.houses) ? data.houses : [];
        
        const found = houses.find(h => String(h.id) === String(id));
        setPropertyData(found || null);
      })
      .catch(err => {
        console.error('Failed to load property data', err);
        setPropertyData(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  
  useEffect(() => {
    if (propertyData && Array.isArray(propertyData.images) && propertyData.images.length > 0) {
      setMainImage(propertyData.images[0]);
    } else {
      setMainImage(null);
    }
  }, [propertyData]);

  if (loading) return <div className="p-8">Loading property...</div>;
  if (!propertyData) return <div className="p-8">Property not found.</div>;

  const title = propertyData.title || 'Untitled Property';
  const price = propertyData.price || '';
  const location = propertyData.location || '';
  const description = propertyData.description || '';
  const beds = propertyData.bed ?? propertyData.beds ?? '-';
  const baths = propertyData.bath ?? propertyData.baths ?? '-';
  const size = propertyData.size || '-';
  const images = Array.isArray(propertyData.images) ? propertyData.images : [];
  const agent = propertyData.agent || { name: 'Agent', logo: '' };

  return (
    <div className=" mx-auto p-4 font-sans bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-black">{price} </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="relative rounded-lg overflow-hidden bg-gray-200 h-[700px]">
            {mainImage ? (
              <img src={mainImage} alt="Property" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">No image available</div>
            )}
           
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setMainImage(img)}
                className={`w-24 h-16 object-cover cursor-pointer rounded border-2 ${mainImage === img ? 'border-red-500' : 'border-transparent'}`}
                alt={`thumbnail-${idx}`}
              />
            ))}
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-3 gap-4 my-8 bg-white p-4 rounded-lg border border-gray-100">
            <div className="text-center border-r">
              <p className="text-gray-500 text-xs uppercase">Bedrooms</p>
              <p className="font-semibold text-lg">🛏️ {beds}</p>
            </div>
            <div className="text-center border-r">
              <p className="text-gray-500 text-xs uppercase">Bathrooms</p>
              <p className="font-semibold text-lg">🚿 {baths}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs uppercase">Size</p>
              <p className="font-semibold text-lg">📐 {size}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">House Description</h2>
            <div className="text-gray-600 space-y-4 leading-relaxed whitespace-pre-line">
              {description}
            </div>
           
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
            
            <a href='https://api.whatsapp.com/send?phone=254759079648' target='_blank'> <button  className="w-full border border-green-500 text-green-600 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-50 transition mb-4" > 
              💬 WhatsApp
            </button></a>
            <h3 className="w-full border border-red-500 text-red-600 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-50 transition mb-4"> 📞+254 759 079 648</h3>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default HousePage;