import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import nexshipLogo from '../assets/nexshipBlack.png'

const Footer = () => {
  return (
    <div className="bg-slate-950">
      <section className="px-4 py-12 max-w-7xl mx-auto text-gray-300">
        <div className="grid grid-cols-1 gap-5 sm:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col gap-4 md:w-2/3">
            <img src={nexshipLogo} alt="" className=" w-32" />
            <p>Your health our priority in every delivery.</p>
          </div>
          <div>
            <h4 className="text-yellow-400 text-sm font-semibold mb-1">Sitemap</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to={'about'} className="hover:pl-2 transition-all">About Us </Link>
              </li>
              <li>
                <Link to={'contact'}  className="hover:pl-2 transition-all">Contact Us</Link>
              </li>
              <li>
                <Link to={'technology'}  className="hover:pl-2 transition-all">Technology</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-400 text-sm font-semibold mb-1">Fulfillment Services</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to={'B2B_Fulfillment'}  className="hover:pl-2 transition-all">B2B Fulfillment</Link>
              </li>
              <li>
                <Link to={'ecommerce_fulfillment'}  className="hover:pl-2 transition-all">Ecommerce Fulfillment</Link>
              </li>
              <li>
                <Link to={'healthcare_fulfillment'}  className="hover:pl-2 transition-all">Healthcare Fulfillment</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-400 text-sm font-semibold mb-1">Delivery Services</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to={'pickup_&_delivery'}  className="hover:pl-2 transition-all">Pickup and Delivery</Link>
              </li>
              <li>
                <Link to={'bespoke_solution'}  className="hover:pl-2 transition-all">Bespoke Solution</Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className=" my-7" />

        <div className="flex flex-col gap-5">
          <p className="text-sm">©2023 Nexship: Order Fulfillment Warehouse & Ecommerce Fulfillment Service. All Rights Reserved.</p>
          <div className=" flex flex-col gap-5">
            <div className="text-sm flex justify-between">
              <Link to={'privacy_policy'}  className="hover:pl-2 transition-all">Privacy Policy </Link>
              <Link to={'terms_&_conditions'} className="hover:pr-2 transition-all">Terms & Conditions </Link>
            </div>
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/in/stevenochieng/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://twitter.com/@_ochieng_steven" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer