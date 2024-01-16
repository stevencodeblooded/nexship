import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import hero1 from '../../assets/hero1.jpg'
import hero2 from '../../assets/hero2.jpg'
import hero3 from '../../assets/hero3.jpg'

const HeroSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1
  };

  return (
    <div className="bg-blue-50">
      <section className=" px-4 pt-32 pb-10 max-w-7xl mx-auto">
        <Slider {...settings}>
          <div>
            <div className="md:flex md:flex-row md:gap-5 md:items-center">
              <div className="flex flex-col gap-5 mb-8 md:w-2/3">
                <h3 className="text-xl font-semibold md:text-2xl">Your Largest Trusted Partner of</h3>
                <h1 className=" text-3xl font-bold leading-snug md:text-4xl lg:text-5xl md:leading-relaxed lg:leading-relaxed">HealthCare Fulfillment
                  and <span className="text-yellow-600">Medical Services </span>
                  in Ontario & GTA
                </h1>
                <div>
                  <Link to={'quote'} className=" bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">Get a Quote</Link>
                </div>
              </div>
              <div className=" md:w-1/3">
                <img src={hero1} alt="hero-image" className="rounded-md w-full" />
              </div>
            </div>
          </div>

          <div>
            <div className="md:flex md:flex-row md:gap-5 md:items-center">
              <div className="flex flex-col gap-5 mb-8 md:w-2/3">
                <h1 className=" text-3xl font-bold leading-snug md:text-4xl lg:text-5xl md:leading-relaxed lg:leading-relaxed">Why <span className="text-yellow-600">NexShip's</span><br className="hidden md:block" /> Services?</h1>
                <p>
                  You will now find premium quality healthcare fulfillment and
                  delivery services in Ontario
                </p>
                <ul className="font-semibold marker:text-yellow-600 marker:text-xl list-disc pl-6 md:text-lg md:space-y-2 ">
                  <li>Get your order fulfillment services on the same day</li>
                  <li>Get NexShip's services within 3 days across Canada</li>
                  <li>We deliver in 48 hours in Ontario</li>
                </ul>
                <div>
                  <Link to={'quote'} className=" bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">Get a Quote</Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <img src={hero2} alt="hero-image" className="rounded-md w-full" />
              </div>
            </div>
          </div>

          <div>
            <div className="md:flex md:flex-row md:gap-5 md:items-center">
              <div className="flex flex-col gap-5 mb-8 md:w-2/3">
                  <h3 className="text-xl font-semibold md:text-2xl">Efficiency Meets Care</h3>
                  <h1 className=" text-3xl font-bold leading-snug md:text-4xl lg:text-5xl md:leading-relaxed lg:leading-relaxed">Nexship’s <span className="text-yellow-600">Healthcare
                    Fulfillment</span> & <span className="text-yellow-600">Delivery </span>
                    Services
                  </h1>
                  <div>
                    <Link to={'quote'} className=" bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">Get a Quote</Link>
                  </div>
              </div>
              <div className="md:w-1/3">
                <img src={hero3} alt="hero-image" className="rounded-md w-full" />
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  )
}

export default HeroSlider