import { Link } from 'react-router-dom'
import deliveryService from '../../assets/delivery service.jpg'

const AboutNexShip = () => {
  return (
    <div className='bg-blue-50'>
      <section className="px-4 py-10 max-w-7xl mx-auto">
        <div className='flex flex-col gap-4 md:gap-8'>
          <div>
            <img src={deliveryService} alt="Delivery" className='rounded-md md:h-72 md:w-full object-cover' />
          </div>
          <div className='flex flex-col gap-6 md:flex-row '>
            <h1 className=" text-3xl font-bold leading-snug md:w-1/3">About NexShip</h1>
            <div className='flex flex-col gap-6 md:w-2/3'>
              <p>
                NexShip is Canadas leading fulfillment, delivery service,
                and reliable supply chain solution provider. We aim to
                revolutionize the way business manage their logistics and
                distribution needs. We are considered as a trusted partner
                in the industry.
              </p>
              <Link to={'learn'} className=" bg-blue-900 text-white px-4 py-2 rounded-md md:w-fit md:mt-16 font-semibold">Learn More About Nexship</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutNexShip