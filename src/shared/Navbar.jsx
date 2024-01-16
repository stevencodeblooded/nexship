import { Link, NavLink } from "react-router-dom"
import nexshipLogo from '../assets/NexShip_Logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useRef, useState } from "react"

const Navbar = () => {
  const [showFulfilment, setShowFulfilment] = useState(false)
  const [pickup, setPickup] = useState(false)
  const [mobileView, setMobileView] = useState(false)
  const timeoutRef = useRef(null);

  //PICK UP
  const handlePickupEnter = () => {
    clearTimeout(timeoutRef.current);
    setPickup(true)
    timeoutRef.current = setTimeout(() => {
      setShowFulfilment(false)
    }, 100);
  }
  
  const handlePickupLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setPickup(false)
    }, 300);
  }

  //FULFILLMENT
  const handleFulfilmentupEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowFulfilment(true)
    timeoutRef.current = setTimeout(() => {
      setPickup(false)
    }, 100);
  }
  
  const handleFulfilmentupLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowFulfilment(false)
    }, 300);
  }

  return (
    <div className=" bg-blue-50 top-0 z-10 fixed w-full">
      <div className="flex items-center gap-2 justify-between px-4 py-3 max-w-7xl mx-auto">
        <Link to={'/'}>
          <img src={nexshipLogo} alt="nexship logo" className=" w-32" />
        </Link>

        <div className=" lg:hidden z-40">
          <FontAwesomeIcon icon={faBars} className="text-3xl cursor-pointer" onClick={() => setMobileView(!mobileView)} />
        </div>

        <ul className={mobileView ? 'bg-blue-200 rounded-l-md absolute z-20 w-3/4 font-semibold px-6 right-0 top-0 min-h-screen pt-32 flex flex-col gap-5 lg:hidden' : 'hidden'}>
          <li><NavLink to={'/'} onClick={() => setMobileView(false)} className={({isActive}) => isActive ? ' text-yellow-600 border-b-2 border-black' : ''}>Home</NavLink></li>
          <li><NavLink to={'about'} onClick={() => setMobileView(false)} className={({isActive}) => isActive ? ' text-yellow-600 border-b-2 border-black' : ''}>About Us</NavLink></li>
          <li>
            <Link to={'#'} onClick={() => setShowFulfilment(!showFulfilment)}>Fulfilment Services <FontAwesomeIcon icon={faChevronDown} className=" text-xs" /></Link>
            {
              showFulfilment && (
                <ul className="px-4 flex flex-col gap-1">
                  <li><Link to={'B2B_Fulfillment'} >B2B Fulfillment</Link></li>
                  <li><Link to={'ecommerce_fulfillment'} >Ecommerce Fulfillment</Link></li>
                  <li><Link to={'healthcare_fulfillment'} >Healthcare Fulfillment</Link></li>
                </ul>
              )
            }
          </li>
          <li>
            <Link to={'#'} onClick={() => setPickup(!pickup)}>Delivery Services <FontAwesomeIcon icon={faChevronDown} className=" text-xs" /></Link>
            {
              pickup && (
                <ul className="px-4 flex flex-col gap-1">
                  <li><Link to={'pickup_&_delivery'}>Pickup and Delivery</Link></li> 
                  <li><Link to={'bespoke_solution'} >Bespoke Solution</Link></li>
                </ul>
              )
            }
          </li>
          <li><NavLink to={'technology'} onClick={() => setMobileView(false)} className={({isActive}) => isActive ? ' text-yellow-600 border-b-2 border-black' : ''}>Technology</NavLink></li>
          <li>
            <Link to={'/'} className=" bg-blue-900 text-white px-4 py-2 rounded-md">Get a Quote </Link>
          </li>
        </ul>

        <ul className="hidden lg:flex items-center gap-4 lg:gap-7 text-sm font-semibold">
          <li>
            <NavLink to={'/'} className={({isActive}) => isActive ? ' text-yellow-600 border-b-2 border-black' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'about'} className={({isActive}) => isActive ? ' text-yellow-600 border-b-2 border-black' : ''}>About Us</NavLink>
          </li>
          <li className="relative">
            <Link to={'/'} className=" flex items-center gap-1" onMouseEnter={handleFulfilmentupEnter} onMouseLeave={handleFulfilmentupLeave} >Fulfilment Services <FontAwesomeIcon icon={faChevronDown} className=" text-xs" /></Link>
            {
              showFulfilment && (
                <ul className=" absolute top-10 bg-blue-900 text-white font-semibold px-4 py-6 rounded-md w-72 space-y-2" onMouseEnter={handleFulfilmentupEnter} onMouseLeave={handleFulfilmentupLeave} >
                  <li><NavLink to={'B2B_Fulfillment'}  className={({isActive}) => isActive ? ' text-yellow-600 border-b-2 border-black' : 'hover:pl-3 transition-all'}>B2B Fulfillment</NavLink></li>
                  <li><Link to={'ecommerce_fulfillment'}  className=" hover:pl-3 transition-all">Ecommerce Fulfillment</Link></li>
                  <li><Link to={'healthcare_fulfillment'}  className=" hover:pl-3 transition-all">Healthcare Fulfillment</Link></li>
                </ul>
              )
            }
          </li>
          <li className="relative">
            <Link to={'/'} className=" flex items-center gap-1 " onMouseEnter={handlePickupEnter} onMouseLeave={ handlePickupLeave }>Delivery Services <FontAwesomeIcon icon={faChevronDown} className=" text-xs" /></Link>
            {
              pickup && (
                <ul className=" absolute top-10 bg-blue-900 text-white font-semibold px-4 py-6 rounded-md w-72 space-y-2" onMouseEnter={handlePickupEnter} onMouseLeave={handlePickupLeave}>
                  <li><Link to={'pickup_&_delivery'} className=" hover:pl-3 transition-all">Pickup and Delivery</Link></li> 
                  <li><Link to={'bespoke_solution'}  className=" hover:pl-3 transition-all">Bespoke Solution</Link></li>
                </ul>
              )
            }
          </li>
          <li>
            <NavLink to={'technology'} className={({isActive}) => isActive ? ' text-yellow-600 border-b-2 border-black' : ''}>Technology </NavLink>
          </li>
          <li>
            <Link to={'/'} className=" bg-blue-900 text-white px-4 py-2 rounded-md">Get a Quote </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar