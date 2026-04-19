import HeaderSection from "./components/header"
import Navbar from "./components/navbar"
import SaleSection from "./components/sale"
import FeatureSection from "./components/featuredrop"
import Categorysection from "./components/category"

const HomeSection = () => {
    
    return(
        <>
        <div className="bg-[#d2d0d1] ">
            <SaleSection/>
            <Navbar/>
            <HeaderSection/>
            <FeatureSection />
            <Categorysection />
        </div>
        </>

    )

}

export default HomeSection