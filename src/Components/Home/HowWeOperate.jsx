import { faCar, faClock, faFaceSmileBeam, faQuoteLeft, faQuoteRight, faServer, faTv } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HowWeOperate = () => {
  return (
    <div className=" bg-blue-50">
      <section className="px-4 py-10 max-w-7xl mx-auto">
        <div className=" flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold leading-snug text-left">How We Operate </h1>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              <div className="flex flex-col items-center gap-6">
                <FontAwesomeIcon icon={faServer} className=" text-4xl bg-blue-600 p-4 rounded-md text-white" />
                <p className="font-semibold"> We receive stock</p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <FontAwesomeIcon icon={faClock} className=" text-4xl bg-blue-600 p-4 rounded-md text-white"  />
                <p className="font-semibold">Connect shopping cart</p>
              </div>
              <div className="flex flex-col items-center gap-6">
              <FontAwesomeIcon icon={faTv} className=" text-4xl bg-blue-600 p-4 rounded-md text-white"  />
              <p className="font-semibold">Online order </p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <FontAwesomeIcon icon={faCar} className=" text-4xl bg-blue-600 p-4 rounded-md text-white"  />
                <p className="font-semibold">Prepare your order</p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <FontAwesomeIcon icon={faFaceSmileBeam} className=" text-4xl bg-blue-600 p-4 rounded-md text-white"  />
                <p className="font-semibold">Clients</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className=" text-2xl flex font-bold justify-center gap-2 mb-6"><FontAwesomeIcon icon={faQuoteLeft} className="text-yellow-400" /> We save our clients valuable time and give them speedy delivery.<FontAwesomeIcon icon={faQuoteRight} className=" self-end text-yellow-400" /></h2>
            <div className="flex flex-col gap-5 lg:gap-7 md:flex-row">
              <p className="md:w-1/2">
                At NexShip, we ve designed a straightforward five step
                process to make your experience as smooth as possible.
                First, we receive your stock, taking great care of your items.
                Next, we connect your shopping cart, making it easy for you
                to manage your products online. When orders come in, our
                dedicated team prepares your items accurately
              </p>
              <p className="md:w-1/2">
                Finally, we deliver your products promptly. NexShip simplifies
                the entire process, making it convenient for you. Your
                satisfaction is our top priority.

              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowWeOperate