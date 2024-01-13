import { Accordion } from "@ark-ui/react"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Faq = () => {
  return (
    <div className=" bg-blue-50">
      <section className="px-4 py-10 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold leading-snug mb-8 ">FAQs: Frequently Asked Questions</h1>
          <div>
            <Accordion.Root defaultValue={['What services does NexShip provide?']} collapsible className="flex flex-col gap-5">
              <Accordion.Item value="What services does NexShip provide?">
                <Accordion.ItemTrigger className=" w-full flex justify-between ">
                  <h1 className=" text-xl font-semibold leading-snug text-left">What services does NexShip provide?</h1>
                  <Accordion.ItemIndicator>
                    <FontAwesomeIcon icon={faChevronUp} />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <p className=" text-sm mt-3">
                    NexShip offers premium healthcare fulfillment and delivery services, specializing in medical,
                    healthcare, and veterinary products. We cover everything from non-prescription medical items to
                    nutrition products and veterinary supplies.
                  </p>
                </Accordion.ItemContent>
              </Accordion.Item>

              <hr className=" border-t border-t-gray-400 mb-6" />

              <Accordion.Item value="We Believe in Innovation">
                <Accordion.ItemTrigger className=" w-full flex justify-between ">
                  <h1 className=" text-xl font-semibold leading-snug text-left">Where does NexShip operate?</h1>
                  <Accordion.ItemIndicator>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <p className=" text-sm mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium natus et dignissimos officiis? 
                    Corporis odit quaerat magni repudiandae sapiente?
                  </p>
                </Accordion.ItemContent>
              </Accordion.Item>

              <hr className=" border-t border-t-gray-400 mb-6" />

              <Accordion.Item value="NexShip's Commitment">
                <Accordion.ItemTrigger className=" w-full flex justify-between ">
                  <h1 className=" text-xl font-semibold leading-snug text-left">How does NexShip stand out in the industry?</h1>
                  <Accordion.ItemIndicator>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <p className=" text-sm mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, quam vitae. Ipsa rem quo odio deleniti
                     ab hic magni voluptatibus!
                  </p>
                </Accordion.ItemContent>
              </Accordion.Item>

              <hr className=" border-t border-t-gray-400 mb-6" />

              <Accordion.Item value="What types of businesses can benefit from NexShip's services?">
                <Accordion.ItemTrigger className=" w-full flex justify-between ">
                  <h1 className=" text-xl font-semibold leading-snug text-left">What types of businesses can benefit from NexShip's services?</h1>
                  <Accordion.ItemIndicator>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <p className=" text-sm mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, quam vitae. Ipsa rem quo odio deleniti
                     ab hic magni voluptatibus!
                  </p>
                </Accordion.ItemContent>
              </Accordion.Item>

              <hr className=" border-t border-t-gray-400 mb-6" />

              <Accordion.Item value="What sets NexShip apart from other order fulfillment center providers?">
                <Accordion.ItemTrigger className=" w-full flex justify-between ">
                  <h1 className=" text-xl font-semibold leading-snug text-left">What sets NexShip apart from other order fulfillment center providers?</h1>
                  <Accordion.ItemIndicator>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <p className=" text-sm mt-3">
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

export default Faq