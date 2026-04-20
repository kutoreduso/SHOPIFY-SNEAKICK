
const wearImg = [

    {id: 1, wearbrnd:'/img/chart.webp'},
    {id: 2, wearbrnd:'/img/gd.jpg'},
    {id:3 , wearbrnd:'/img/rocap.jpg'},
    {id:4 , wearbrnd:'/img/goose.jpg'}
]

const Categorysection = () => {
    return (
        <>
            <div className="p-4 lg:p-8 mt-4">
                <h1 className="uppercase text-2xl font-bold font-satoshi text-[#1f1518] mb-6">
                    Latest Archive
                </h1>
            </div>

            {/* 1. Removed 'w-full' from the grid to prevent it from stretching items.
                2. Added 'items-start' to ensure the height is defined by the cards, not the row.
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:flex-nowrap items-start lg:overflow-visible overflow-x-hidden">
                {wearImg.map((brand) => (
                    <div 
                        key={brand.id} 
                        className="p-4 md:p-6 lg:pl-8 flex-shrink-0 flex justify-center lg:block object-contain"
                    >
                        {/* SIZING LOCK:
                            Fixed dimensions mean these won't change relative to the screen.
                        */}
                        <div className="
                            w-[calc(100vw-2rem)] md:w-[380px] lg:w-106 
                            h-[50vh] md:h-[500px] lg:h-140 
                            flex flex-col lg:flex-row 
                            border-[#1f1518] border-2 
                            bg-[#d1d1d1] overflow-hidden
                            flex-shrink-0
                        ">
                            <img 
                                src={brand.wearbrnd} 
                                alt=""
                                className="w-full h-full object-cover pointer-events-none"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Categorysection