import React, { useRef, useState } from 'react';

const products = [
  { id: 1, name: 'RICK OWENS HOODIE', price: 'P 18,000', img: '/prd/rickhoodie.png', badge: 'LIMITED\nDROP' },
  { id: 2, name: 'TRAVIS SCOTT MOCHA HIGH', price: '$190', img: '/prd/ts.png' },
  { id: 3, name: 'RICK OWENS BELLA CARGO', price: '$120', img: '/prd/bellacargo.png' },
  { id: 4, name: 'PEARL JAM GRAPHICS TEE', price: '$210', img: '/prd/pearljam.png' },
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

            {/* The Scrolling Container 
                - Added cursor-grab to show a "hand" icon on desktop
                - Added mouse events for drag-to-scroll 
            */}
            <div 
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={`flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'}`}
            >
                {products.map((item) => (
                    // Added pointer-events-none to the inner elements during drag so you don't accidentally highlight text or images while dragging
                    <div key={item.id} className={`w-full flex-shrink-0 snap-center sm:w-auto sm:flex-shrink-1 sm:snap-align-none flex flex-col font-satoshi text-[#1f1518] ${isDragging ? 'pointer-events-none' : ''}`}>
                        
                        {/* Image Container */}
                        <div className="relative border border-[#1f1518] bg-[#d1d1d1] p-4 aspect-[4/5] flex items-center justify-center select-none">
                            {item.badge && (
                                <div className="absolute top-4 left-4 bg-[#1a1617] text-[#ebebeb] font-bold text-xl leading-tight px-4 py-3 rounded-xl text-center whitespace-pre-line shadow-sm z-10">
                                    {item.badge}
                                </div>
                            )}
                            {/* draggable="false" stops the browser's default image drag behavior */}
                            <img 
                                src={item.img} 
                                alt={item.name} 
                                draggable="false"
                                className="w-full h-full object-contain drop-shadow-lg"
                            />
                        </div>

                        {/* Text Details */}
                        <div className="mt-3 flex flex-col space-y-1 select-none">
                            <h2 className="uppercase text-lg tracking-wide leading-none">{item.name}</h2>
                            <p className="text-lg leading-none">{item.price}</p>
                        </div>

                        {/* Add to Cart */}
                        <button className="mt-4 border border-[#1f1518] bg-[#d1d1d1] py-3 w-full text-center uppercase tracking-wider hover:bg-[#1f1518] hover:text-white transition-colors duration-300 pointer-events-auto">
                            Add to Cart
                        </button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureSection;