import { faBox, faCar, faDollarSign, faHouse, faNotesMedical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WhyUs = () => {
  return (
    <div className="bg-yellow-100">
      <section className="px-4 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
          <div className="flex flex-col gap-4 self-center">
            <h1 className=" text-3xl font-bold leading-snug ">Why Choose Us?</h1>
            <p>
              NexShip provides valuable, unique
              services to clients.
            </p>
          </div>
          <div className=" bg-white p-4 rounded-md flex flex-col gap-6">
            <div>
              <FontAwesomeIcon icon={faDollarSign} className=" bg-yellow-600 p-4 text-3xl rounded" />
            </div>
            <p>We provide the order fulfilment
              solutions you need at the price you wish
            </p>
          </div>
          <div className=" bg-white p-4 rounded-md  flex flex-col gap-6">
            <div>
              <FontAwesomeIcon icon={faCar} className=" bg-yellow-600 p-4 text-3xl rounded" />
            </div>
            <p>
              Same-day fulfillment and delivery pick
              and drop
            </p>
          </div>
          <div className=" bg-white p-4 rounded-md  flex flex-col gap-6">
            <div>
              <FontAwesomeIcon icon={faHouse} className=" bg-yellow-600 p-4 text-3xl rounded" />
            </div>
            <p>
              We offer rapid warehousing & fulfilment
              services and delivery within a 24–48-
              hour timeframe throughout Ontario.
            </p>
          </div>
          <div className=" bg-white p-4 rounded-md  flex flex-col gap-6">
            <div>
              <FontAwesomeIcon icon={faBox} className=" bg-yellow-600 p-4 text-3xl rounded" />
            </div>
            <p>
              Our extended fulfillment center &
              delivery service covers Canada, with
              orders typically arriving within 48-72
              hours.
            </p>
          </div>
          <div className=" bg-white p-4 rounded-md  flex flex-col gap-6">
            <div>
              <FontAwesomeIcon icon={faNotesMedical} className=" bg-yellow-600 p-4 text-3xl rounded" />
            </div>
            <p>
              We specialize in dedicated fulfillment
              services for medical, healthcare, and
              veterinary products exclusively within
              the province of Ontario.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyUs