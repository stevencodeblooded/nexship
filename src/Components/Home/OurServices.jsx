import { Link } from 'react-router-dom'
import serviceVan from '../../assets/serviceDeliveryVan.png'

const OurServices = () => {
  return (
    <div className=' bg-blue-50'>
      <section className="px-4 py-10 max-w-7xl mx-auto">
        <div className='bg-yellow-200 pl-4 md:pl-10 pt-8 rounded-lg flex flex-col md:flex-row md:justify-between lg:pt-12'>
          <div className=' flex flex-col gap-6 md:pb-10 md:w-1/2'>
            <h1 className='text-3xl font-bold leading-snug text-left'>Our Services</h1>
            <p className=' text-lg font-semibold'>
              NexShip is the name of the trust. NexShip provides
              services in the following major areas:
            </p>
            <ul className=' marker:text-yellow-600 pl-6 font-semibold space-y-2 list-disc text-2xl '>
              <li>B2B fulfillment</li>
              <li>eCommerce</li>
              <li>Healthcare fulfillment</li>
            </ul>
            <div>
              <Link to={'learn'} className=" bg-blue-900 text-white px-4 py-2 rounded-md font-semibold mt-20">Get a Quote</Link>
            </div>
          </div>

          <div className=' md:self-end md:w-1/2'>
            <img src={serviceVan} alt="service van" className='w-full' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurServices