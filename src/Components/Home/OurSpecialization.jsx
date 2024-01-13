import { Accordion } from "@ark-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"

const OurSpecialization = () => {
  return (
    <div className='bg-blue-50'>
      <section className="px-4 py-10 max-w-7xl mx-auto">
        <div>
          <Accordion.Root defaultValue={['Our Specialization']} collapsible className="flex flex-col gap-5">
            <Accordion.Item value="Our Specialization">
              <Accordion.ItemTrigger className=" w-full flex justify-between items-center">
                <h1 className=" text-3xl font-bold leading-snug text-left">Our Specialization</h1>
                <Accordion.ItemIndicator>
                  <FontAwesomeIcon icon={faMinus} />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <div className="flex flex-col gap-3 mt-5">
                  <h2 className=" text-lg font-semibold">
                    Our expertise lies in healthcare fulfillment solutions. We recognize the critical role that timely delivery of medical,
                    healthcare, and veterinary products plays in the well-being of individuals and animals alike.
                  </h2>
                  <p>
                    Therefore, we offer three fulfillment services to meet the healthcare industry standards. Whether it s non-prescription medical
                    n products, veterinary supplies, or any other healthcare-related items, NexShip is the partner you can rely on.
                  </p>
                  <p>
                    We specialize in B2B retail fulfillment, e-commerce fulfillment, and healthcare fulfillment.
                  </p>
                </div>
              </Accordion.ItemContent>
            </Accordion.Item>

            <hr className=" border-t border-t-gray-400" />

            <Accordion.Item value="We Believe in Innovation">
              <Accordion.ItemTrigger className=" w-full flex justify-between items-center">
                <h1 className=" text-3xl font-bold leading-snug text-left">We Believe in Innovation</h1>
                <Accordion.ItemIndicator>
                  <FontAwesomeIcon icon={faPlus} />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <div className="flex flex-col gap-3 mt-5">
                    <h2 className=" text-lg font-semibold">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maxime perspiciatis voluptas placeat nemo aperiam pariatur illo nisi soluta non.
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nostrum accusantium quisquam? Qui nemo voluptatem illum corporis eaque aperiam! Eius autem inventore sequi?
                    </p>
                    <p>
                      We specialize in B2B retail fulfillment, e-commerce fulfillment, and healthcare fulfillment.
                    </p>
                </div>
              </Accordion.ItemContent>
            </Accordion.Item>

            <hr className=" border-t border-t-gray-400" />

            <Accordion.Item value="NexShip's Commitment">
              <Accordion.ItemTrigger className=" w-full flex justify-between items-center">
                <h1 className=" text-3xl font-bold leading-snug text-left">NexShip's Commitment</h1>
                <Accordion.ItemIndicator>
                  <FontAwesomeIcon icon={faPlus} />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <div className="flex flex-col gap-3 mt-5">
                  <h2 className=" text-lg font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maxime perspiciatis voluptas placeat nemo aperiam pariatur illo nisi soluta non.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nostrum accusantium quisquam? Qui nemo voluptatem illum corporis eaque aperiam! Eius autem inventore sequi?
                  </p>
                  <p>
                    We specialize in B2B retail fulfillment, e-commerce fulfillment, and healthcare fulfillment.
                  </p>
                </div>
              </Accordion.ItemContent>
            </Accordion.Item>

            <hr className=" border-t border-t-gray-400" />

          </Accordion.Root>
        </div>
      </section>
    </div>
  )
}

export default OurSpecialization