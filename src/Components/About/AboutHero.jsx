import { Link } from "react-router-dom"
import heroImage from '../../assets/aboutHero.png'

const AboutHero = () => {
  return (
    <div className="pt-32 bg-blue-50">
        <section className="px-4 max-w-7xl mx-auto">
            <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex flex-col gap-3 md:w-2/3">
                    <h3 className="text-xl font-semibold md:text-2xl md:mt-10">Your Destination for Top-Tier</h3>
                    <h1 className=" text-3xl font-bold leading-snug md:text-4xl lg:w-5/6 lg:text-5xl md:leading-relaxed lg:leading-relaxed">Courier, Warehousing, & Healthcare Services - Nexship</h1>
                    <div className=" mt-10">
                      <Link to={'quote'} className=" bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">Get a Quote</Link>
                    </div>
                </div>
                <div className="w-2/3 mx-auto md:w-1/3">
                    <img src={heroImage} alt="" className="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutHero