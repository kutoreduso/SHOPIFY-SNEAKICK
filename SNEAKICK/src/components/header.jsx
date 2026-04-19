

const HeaderSection = () => {
    return(
        <>
            <div className="lg:w-full lg:h-135 md:w-full md:h-75 w-full h-75 relative overflow-hidden">
                <img
                src="/img/bg1.jpg"
                alt=""
                className="lg:w-full lg:h-135 md:h-full md:w-full w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 flex lg:p-2 ml-5 lg:flex-col flex-col lg:mt-50 space-y-1 md:mt-25 md:flex-col mt-10 ">
                    <h1 className="uppercase font-satoshi text-[#D2D0D1] lg:w-150 font-bold lg:text-7xl text-2xl md:text-3xl md:w-65 w-60">discover new kicks</h1>
                    <p className="font-satoshi text-[#D2D0D1] lg:w-120 text-justify md:w-80">Where streetwear meets statement, bold silhouettes and unmatched confidence define every urban aesthetic.</p>
                    <div className="flex lg:flex-row space-x-4 flex-col md:flex-row space-y-1">
                        <div className="border-2 bg-[#1F1518] lg:w-50 lg:h-15 md:w-40 md:h-10 w-40 h-10">
                            <h1 className="text-center font-bold text-[#D2D0D1] font-satoshi lg:p-3 md:p-2 p-2 md:text-[15px] lg:text-[20px] uppercase hover:bg-[#d9d0d1] hover:text-[#1f1518] duration-300">Shop now</h1>
                        </div>
    <div className="border-2 bg-[#D2D0D1] md:w-45 md:h-10 lg:w-60 lg:h-15 duration-300 w-50 h-10 hover:bg-[#1f1518]">
                            <h1 className="text-center font-bold text-[#1f1518] font-satoshi items-center lg:p-4 md:p-2 p-2 lg:text-[15px] text-[15px] uppercase  hover:text-[#D2D0D1] md:text-[13px] w-full">EXPLORE COLLECTION</h1>
                        </div>

                    </div>
                    
                    
                    </div>    

            </div>
        </>
    )


}

export default HeaderSection