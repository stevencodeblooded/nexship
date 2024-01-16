import strategyImage1 from "../../assets/strategy-1.png";
import strategyImage2 from "../../assets/strategy-2.png";
import strategyImage3 from "../../assets/strategy-3.png";

const Strategies = () => {
  return (
    <div className="bg-blue-50">
      <section className="px-4 py-10 max-w-7xl mx-auto lg:py-12">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:gap-10">
            <div className=" self-center">
              <img src={strategyImage1} alt="" className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className=" mb-4 text-3xl font-bold lg:text-4xl">
                NexShip's Business Strategies
              </h1>
              <p>
                Our business strategies are designed to provide efficient and
                reliable fulfillment and delivery services in Canada:
              </p>
              <h2 className="text-xl font-semibold">
                Key Points of Operational Strategies
              </h2>
              <ul className="font-semibold list-disc marker:text-yellow-500 marker:text-2xl pl-7">
                <li>Efficiency Optimization</li>
                <li>Inventory Management for precise order fulfillment</li>
                <li>Scalability</li>
                <li>Sustainability Initiatives</li>
                <li>Quality Control</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:gap-10 md:justify-between">
            <div className="self-center md:order-2">
              <img src={strategyImage2} alt="" className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-4 md:order-1">
              <h1 className=" mb-4 text-3xl font-bold lg:text-4xl">
                NexShip's Marketing Strategies
              </h1>
              <p>
                Our business strategies are designed to provide efficient and
                reliable fulfillment and delivery services in Canada:
              </p>
              <h2 className="text-xl font-semibold">
                Key Points of Operational Strategies
              </h2>
              <ul className="font-semibold list-disc marker:text-yellow-500 marker:text-2xl pl-7">
                <li>Segmented Marketing</li>
                <li>Online Presence</li>
                <li>Partnerships</li>
                <li>Data-Driven Insights</li>
                <li>Content Marketing</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:gap-10">
            <div className=" self-center">
              <img src={strategyImage3} alt="" className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className=" mb-4 text-3xl font-bold lg:text-4xl">
                NexShip's  Customer Service Strategies
              </h1>
              <p>
                Our business strategies are designed to provide efficient and
                reliable fulfillment and delivery services in Canada:
              </p>
              <h2 className="text-xl font-semibold">
                Key Points of Operational Strategies
              </h2>
              <ul className="font-semibold list-disc marker:text-yellow-500 marker:text-2xl pl-7">
                <li>Proactive Communication</li>
                <li>Feedback Mechanisms</li>
                <li>Value-Added Services</li>
                <li>Customized Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Strategies;
