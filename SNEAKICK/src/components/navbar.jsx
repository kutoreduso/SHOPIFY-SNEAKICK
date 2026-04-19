import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const containerRef = useRef(null);
    const tl = useRef(null);

    // 1. Setup GSAP using standard useEffect instead of useGSAP
    useEffect(() => {
        // Create a GSAP context scoped to our container
        let ctx = gsap.context(() => {
            tl.current = gsap.timeline({ paused: true })
                .to('.mobile-menu', { 
                    y: 0, 
                    duration: 0.8, 
                    ease: 'power4.inOut' 
                })
                .to('.menu-link', { 
                    y: 0, 
                    opacity: 1, 
                    stagger: 0.1, 
                    duration: 0.5, 
                    ease: 'power3.out' 
                }, "-=0.4");
        }, containerRef); // Scope it to containerRef

        // Cleanup function when component unmounts
        return () => ctx.revert();
    }, []); // Empty dependency array means this runs once on mount

    // 2. Play/Reverse the timeline when isOpen changes
    useEffect(() => {
        if (tl.current) {
            if (isOpen) {
                tl.current.play();
            } else {
                tl.current.reverse();
            }
        }
    }, [isOpen]);

    return(
        <div ref={containerRef} className="p-4 w-full relative">
             <nav className="font-satoshi text-[#1f1518] font-bold flex justify-between items-center relative z-50">
                <div className="text-xl tracking-widest">SNEAKICK</div>
                
                <div className='hidden md:flex space-x-8 uppercase font-satoshi'>
                    <a href="#" className="hover:text-[#797374] transition-colors">New Arrival</a>
                    <a href="#" className="hover:text-[#797474] transition-colors">Best Seller</a>
                    <a href="#" className="hover:text-[#797474] transition-colors">Sneakers</a>
                </div>
                
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden font-medium uppercase tracking-widest text-sm focus:outline-none transition-colors duration-500 ${isOpen ? 'text-[#d2d0d1]' : 'text-[#1f1518]'}`}
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>
            </nav>

            <div className="mobile-menu fixed top-0 left-0 w-full h-screen bg-[#1f1518] z-40 flex flex-col items-center justify-center space-y-6 -translate-y-full">
                <div className="overflow-hidden">
                    <a href="#" className="menu-link block text-[#d2d0d1] text-4xl md:text-5xl font-satoshi font-bold uppercase translate-y-full opacity-0 hover:text-gray-400 transition-colors">
                        New Arrival
                    </a>
                </div>
                <div className="overflow-hidden">
                    <a href="#" className="menu-link block text-[#d2d0d1] text-4xl md:text-5xl font-satoshi font-bold uppercase translate-y-full opacity-0 hover:text-gray-400 transition-colors">
                        Best Seller
                    </a>
                </div>
                <div className="overflow-hidden">
                    <a href="#" className="menu-link block text-[#d2d0d1] text-4xl md:text-5xl font-satoshi font-bold uppercase translate-y-full opacity-0 hover:text-gray-400 transition-colors">
                        Sneakers
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;