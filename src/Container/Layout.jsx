import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className=' min-h-screen'>
        <Navbar />
        <Outlet />
        <div className=' sticky top-full'>
            <Footer />
        </div>
    </div>
  )
}

export default Layout