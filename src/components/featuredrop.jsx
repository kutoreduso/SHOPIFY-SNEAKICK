import React, { useRef, useState } from 'react';

const products = [
  { id: 1, name: 'RICK OWENS HOODIE', price: 'P 18,000', img: '/prd/rickhoodie.png',badge: 'LIMITED\nDROP',hoverImg:'/prd/hoodiehover.png' },
  { id: 2, name: 'TRAVIS SCOTT MOCHA HIGH', price: 'P 78000', img: '/prd/ts.png',hoverImg:'/prd/tshover.png' },
  { id: 3, name: 'RICK OWENS BELLA CARGO', price: 'P 18000', img: '/prd/bellacargo.png',hoverImg: '/prd/bellahover.png' },
  { id: 4, name: 'LOST AND FOUND JORDAN 1 RETRO', price: 'P24000', img: '/prd/lsf.avif',hoverImg:'/prd/lsfhover.png' },
];

const FeatureSection = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // --- Drag to Scroll Logic for Mouse Users ---
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Multiply by 1.5 to make dragging feel faster
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="p-4 lg:p-8 mt-4">
            
            <h1 className="uppercase text-2xl font-bold font-satoshi text-[#1f1518] mb-6">
                Featured Drop
            </h1>
<div 
   
               ref={scrollRef}
        className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth 
                   sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible 
                   [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      >
                {products.map((item) => (
          <div key={item.id} className="group w-full flex-shrink-0 snap-center sm:w-auto sm:flex-shrink-1 flex flex-col font-satoshi text-[#1f1518]">
            
            {/* Image Container */}
            <div className="relative border border-[#1f1518] bg-[#d1d1d1] p-4 aspect-[4/5] flex items-center justify-center select-none overflow-hidden">
              {item.badge && (
                <div className="absolute top-4 left-4 bg-[#1a1617] text-[#ebebeb] font-bold text-xl leading-tight px-4 py-3 rounded-xl text-center whitespace-pre-line shadow-sm z-20">
                  {item.badge}
                </div>
              )}

              {/* Hover Image (Shown only on hover) */}
              <img 
                src={item.hoverImg || item.img} 
                alt={`${item.name} alternate`} 
                className="absolute inset-0 w-full h-full object-contain p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
              />

              {/* Initial Image (Hides on hover) */}
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-contain drop-shadow-lg transition-opacity duration-500 group-hover:opacity-0"
              />
            </div>

            {/* Text Details */}
            <div className="mt-3 flex flex-col space-y-1">
              <h2 className="uppercase text-lg tracking-wide">{item.name}</h2>
              <p className="text-lg">{item.price}</p>
            </div>

            {/* Add to Cart */}
            <button className="mt-4 border border-[#1f1518] bg-[#d1d1d1] py-3 w-full text-center uppercase tracking-wider hover:bg-[#1f1518] hover:text-white transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;