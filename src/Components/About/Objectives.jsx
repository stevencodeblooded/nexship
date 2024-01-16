const Objectives = () => {
  return (
    <div className=" bg-blue-50">
      <section className="px-4 py-10 max-w-7xl mx-auto lg:py-12">
        <div>
          <h1 className=" text-3xl font-bold leading-snug text-black text-center mb-8 md:text-4xl lg:text-5xl md:leading-relaxed lg:leading-relaxed">NexShip's Objectives</h1>
          <div className="mb-10">
            <h2 className=" mb-4 text-3xl font-bold lg:text-4xl ">Roadmap to Achievements</h2>
            <p className=" text-xl font-semibold lg:w-2/3">
              We want our healthcare and medical delivery service to reach every Ontario
              client and Canada. We have set our objectives.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className=" p-3 lg:col-span-2">
            <p className="font-semibold lg:w-1/2 lg:mx-auto">
              Our objectives serve as a roadmap to our
              achievements. As a provider of fulfillment and
              delivery services in Canada, we are committed to:
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg p-3 flex flex-col gap-3">
            <div className="bg-yellow-400 w-10 h-10 rounded-full flex justify-center items-center text-white font-semibold">1</div>
            <h4 className="font-semibold text-lg pb-5">Technological Advancement</h4>
          </div>
          <div className="bg-gray-200 rounded-lg p-3 flex flex-col gap-3">
            <div className="bg-yellow-400 w-10 h-10 rounded-full flex justify-center items-center text-white font-semibold">2</div>
            <h4 className="font-semibold text-lg pb-5">Quality Assurance</h4>
          </div>
          <div className="bg-gray-200 rounded-lg p-3 flex flex-col gap-3">
            <div className="bg-yellow-400 w-10 h-10 rounded-full flex justify-center items-center text-white font-semibold">3</div>
            <h4 className="font-semibold text-lg pb-5">Client-Centric Approach</h4>
          </div>
          <div className="bg-gray-200 rounded-lg p-3 flex flex-col gap-3">
            <div className="bg-yellow-400 w-10 h-10 rounded-full flex justify-center items-center text-white font-semibold">4</div>
            <h4 className="font-semibold text-lg pb-5">Sustainability Initiatives</h4>
          </div>
          <div className="bg-gray-200 rounded-lg p-3 flex flex-col gap-3">
            <div className="bg-yellow-400 w-10 h-10 rounded-full flex justify-center items-center text-white font-semibold">5</div>
            <h4 className="font-semibold text-lg pb-5">Workforce Development</h4>
          </div>
          <div className="bg-gray-200 rounded-lg p-3 flex flex-col gap-3">
            <div className="bg-yellow-400 w-10 h-10 rounded-full flex justify-center items-center text-white font-semibold">6</div>
            <h4 className="font-semibold text-lg pb-5">Regulatory Compliance</h4>
          </div>
          <div className="bg-gray-200 rounded-lg p-3 flex flex-col gap-3">
            <div className="bg-yellow-400 w-10 h-10 rounded-full flex justify-center items-center text-white font-semibold">7</div>
            <h4 className="font-semibold text-lg pb-5">Expand Service Coverage</h4>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Objectives