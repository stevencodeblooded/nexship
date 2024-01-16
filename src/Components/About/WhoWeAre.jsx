import { Link } from 'react-router-dom'
import whoWeArreImage from '../../assets/whoweare.jpg'
import aboutHero2 from '../../assets/about-hero-2.png'
import aboutHero from '../../assets/about-option-2.jpg'

const WhoWeAre = () => {
  return (
    <div className="bg-white">
      <section className="px-4 py-10 max-w-7xl mx-auto">
        <div className=' flex flex-col gap-6'>
          <div className='flex flex-col gap-6'>
            <h1 className=" text-3xl font-bold leading-snug ">Who We Are?</h1>
            <p className=' text-lg font-semibold '>
              NexShip is a healthcare fulfillment and delivery services
              provider company in Canada. At NexShip.ca, we re not just
              a healthcare fulfillment services company we re your
              dedicated partner in delivering supply chain solutions.
            </p>
          </div>
          <div>
            <img src={whoWeArreImage} alt="" className='rounded-md h-64 w-full object-cover' />
          </div>
          <div className='flex flex-col gap-4'>
            <p className=' text-xl font-semibold lg:w-5/6 lg:text-2xl lg:leading-relaxed'>
              Our comprehensive services include fulfillment and delivery services
              in Canada, and we cater to a wide range of health-related businesses,
              such as medical clinics, hospitals, pharmacies, veterinary centers, and
              other healthcare-related companies.
            </p>
            <div className='flex flex-col gap-6 md:flex-row items-center'>
              <div className='flex flex-col gap-3 md:w-2/3'>
                <p>
                  We understand that efficient delivery fulfillment is crucial in the
                  healthcare industry. That s why we have invested in state of the art
                  facilities, including a top notch fulfillment warehouse and advanced
                  fulfillment solutions, to ensure the timely and secure distribution of
                  essential medical products and equipment.
                </p>
                <p>
                  NexShip is committed to providing the best fulfillment and delivery
                  services in Canada. Our warehouses have the latest technology to
                  optimize order fulfillment services, guaranteeing quick and accurate
                  deliveries of medical supplies and pharmaceuticals. We take pride
                  in being your trusted partner for order fulfillment services in Canada.
                </p>
                <p>
                  With modern facilities, advanced technology, and a committed
                  team, we re here to help you simplify your operations and provide
                  excellent service to your clients. Your success is our priority, and
                  we re ready to be your trusted ally in healthcare fulfillment
                </p>
              </div>
              <div className='md:hidden'>
                <img src={aboutHero} alt="" className=' rounded-lg' />
              </div>
              <div className='hidden md:block md:w-1/3'>
                <img src={aboutHero2} alt="" className=' rounded-lg' />
              </div>
            </div>
            <div className='flex justify-center mt-8'>
              <Link to={'quote'} className=" bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeAre