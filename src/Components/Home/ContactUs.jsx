import { Link } from "react-router-dom"
import contactImage from '../../assets/contactImage.jpg'

const ContactUs = () => {
  return (
    <div className=" bg-blue-50">
      <section className="px-4 py-10 max-w-7xl mx-auto">
        <div className=" flex flex-col gap-10 md:flex-row md:items-center">
          <div className="flex flex-col gap-7 md:w-1/2">
            <h1 className="text-3xl font-bold leading-snug ">Contact Us</h1>
            <p className="font-semibold">
              Are you ready to improve your order fulfillment process
              and make your customers happy?
            </p>
            <p className=" text-sm">
              Talk to us at NexShip today, and we ll figure out how to help you. Our
              team will work closely with you to find the best way to make your
              business operate smoothly and grow. We cant wait to be the team you
              trust to help your business do its best. 
            </p>
            <p className="font-semibold">
              Contact us now, and let s get started!
            </p>
            <div>
              <Link className=" bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">Contact Us</Link>
            </div>
          </div>
          <div className="md:w-1/2 ">
            <img src={contactImage} alt="contact" className=" rounded-md"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs