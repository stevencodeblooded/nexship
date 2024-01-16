import { Accordion } from "@ark-ui/react"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CoreValues = () => {
  return (
    <div className="bg-blue-50">
      <section className="px-4 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className=" mb-4 text-3xl font-bold lg:text-4xl">NexShip's Core Values</h1>
            <h3 className=" mb-3 text-2xl font-semibold">Our Compass in Every Decision</h3>
            <p className=" lg:w-5/6">
              NexShips core values set directions for every decision. Core values are an integral part of our business.
              Our unique business values create a high brand image in the minds of our clients
            </p>
          </div>

          <div>
            <Accordion.Root defaultValue={['Reliability']} collapsible className="flex flex-col gap-5">
              <Accordion.Item value="Reliability">
                <Accordion.ItemTrigger className=" w-full flex justify-between ">
                  <h1 className=" text-3xl font-semibold leading-snug text-left">Reliability</h1>
                  <Accordion.ItemIndicator>
                    <FontAwesomeIcon icon={faMinus} />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <p className=" mt-3 lg:w-3/4">
                    We are committed to consistently delivering dependable and trustworthy logistics
                    services to our clients, ensuring their peace of mind.
                  </p>
                </Accordion.ItemContent>
              </Accordion.Item>

              <hr className=" border-t border-t-gray-400 mb-6" />

              <Accordion.Item value="Innovation">
                <Accordion.ItemTrigger className=" w-full flex justify-between ">
                  <h1 className=" text-3xl font-semibold leading-snug text-left">Innovation</h1>
                  <Accordion.ItemIndicator>
                    <FontAwesomeIcon icon={faPlus} />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <p className=" mt-3 lg:w-3/4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium natus et dignissimos officiis? 
                    Corporis odit quaerat magni repudiandae sapiente?
                  </p>
                </Accordion.ItemContent>
              </Accordion.Item>

              <hr className=" border-t border-t-gray-400 mb-6" />

              <Accordion.Item value="NexShip's Commitment">
                <Accordion.ItemTrigger className=" w-full flex justify-between ">
                  <h1 className=" text-3xl font-semibold leading-snug text-left">NexShip s Commitment</h1>
                  <Accordion.ItemIndicator>
                    <FontAwesomeIcon icon={faPlus} />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <p className=" mt-3 lg:w-3/4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, quam vitae. Ipsa rem quo odio deleniti
                     ab hic magni voluptatibus!
                  </p>
                </Accordion.ItemContent>
              </Accordion.Item>

              <hr className=" border-t border-t-gray-400 mb-6" />

              <Accordion.Item value="Sustainability">
                <Accordion.ItemTrigger className=" w-full flex justify-between ">
                  <h1 className=" text-3xl font-semibold leading-snug text-left">Sustainability</h1>
                  <Accordion.ItemIndicator>
                    <FontAwesomeIcon icon={faPlus} />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <p className=" mt-3 lg:w-3/4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, quam vitae. Ipsa rem quo odio deleniti
                     ab hic magni voluptatibus!
                  </p>
                </Accordion.ItemContent>
              </Accordion.Item>

              <hr className=" border-t border-t-gray-400 mb-6" />

              <Accordion.Item value="Integrity">
                <Accordion.ItemTrigger className=" w-full flex justify-between ">
                  <h1 className=" text-3xl font-semibold leading-snug text-left">Integrity</h1>
                  <Accordion.ItemIndicator>
                    <FontAwesomeIcon icon={faPlus} />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <p className=" mt-3 lg:w-3/4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, quam vitae. Ipsa rem quo odio deleniti
                     ab hic magni voluptatibus!
                  </p>
                </Accordion.ItemContent>
              </Accordion.Item>

              <hr className=" border-t border-t-gray-400 mb-6" />

            </Accordion.Root>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoreValues