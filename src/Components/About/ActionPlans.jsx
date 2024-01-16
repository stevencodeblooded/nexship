import { Link } from "react-router-dom"

const ActionPlans = () => {
  return (
    <div className="bg-blue-50">
      <section className="px-4 py-10 max-w-7xl mx-auto ">
        <div className="bg-yellow-200 rounded-2xl">
          <div className=' p-10 flex flex-col gap-6 lg:w-4/5'>
            <div>
              <h1 className=" mb-4 text-3xl font-bold lg:text-4xl">NexShips Action Plans</h1>
              <p>
                Our action plans are a testament to our commitment to excellence in
                fulfillment and delivery services in Canada:
              </p>
            </div>
            <div>
              <h2 className=" mb-4 text-xl font-semibold lg:text-2xl">Operational Excellence Action Plan:</h2>
              <p>
                NexShip is committed to enhancing operational efficiency by implementing cutting
                edge technology and sustainable practices to optimize supply chain operations and
                exceed industry standards
              </p>
            </div>
            <div>
              <h2 className=" mb-4 text-xl font-semibold lg:text-2xl">Customer-Centric Growth Strategy:</h2>
              <p>
                NexShips action plan focuses on understanding and meeting the unique needs of
                healthcare provider clients, offering customized solutions, and delivering exceptional
                customer service to foster sustainable growth and client satisfaction.
              </p>
            </div>
            <div className="mb-8 mt-6">
              <Link to={'quote'} className=" bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ActionPlans