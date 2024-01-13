import AboutNexShip from "../Components/Home/AboutNexShip"
import ContactUs from "../Components/Home/ContactUs"
import Faq from "../Components/Home/Faq"
import HeroSlider from "../Components/Home/HeroSlider"
import HowWeOperate from "../Components/Home/HowWeOperate"
import NoAnswer from "../Components/Home/NoAnswer"
import OurServices from "../Components/Home/OurServices"
import OurSpecialization from "../Components/Home/OurSpecialization"
import ReliableFulfillment from "../Components/Home/ReliableFulfillment"
import WhyUs from "../Components/Home/WhyUs"

const HomeScreen = () => {
  return (
    <div className="overflow-x-hidden">
        <HeroSlider />
        <WhyUs />
        <AboutNexShip />
        <OurSpecialization />
        <OurServices />
        <HowWeOperate />
        <ReliableFulfillment />
        <ContactUs />
        <Faq />
        <NoAnswer />
    </div>
  )
}

export default HomeScreen