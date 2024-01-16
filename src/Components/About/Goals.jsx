import satisfactionImage from '../../assets/satisfactionImage1.png' 
import satisfactionImage2 from '../../assets/strategy-1.png'
import satisfactionImage3 from '../../assets/strategy-2.png'

 const Goals = () => {
  return (
    <div className=" bg-blue-50">
      <section className="px-4 py-10 max-w-7xl mx-auto lg:py-12">
        <div>
          <div>
            <h1 className=" text-3xl font-bold leading-snug md:text-4xl lg:text-5xl lg:w-5/6 md:leading-relaxed lg:leading-relaxed">NexShip's Goals</h1>
            <p className=" text-xl mb-8 font-semibold md:text-2xl">Our Ambitious Goals for The Future</p>
          </div>

          <div className='flex flex-col gap-7'>
            <div className='flex flex-col gap-7 md:flex-row items-center md:justify-between'>
              <div>
                <h2 className=" mb-4 text-2xl font-bold lg:text-3xl">Operational Excellence</h2>
                <p className=' text-lg'>
                  Strive for continuous improvement in supply chain
                  operations to maintain industry leading standards.
                </p>
              </div>
              <div>
                <img src={satisfactionImage} alt="" className='rounded-lg' />
              </div>
            </div>
            <div className='flex flex-col gap-7 md:flex-row items-center md:justify-between'>
              <div>
                <h2 className=" mb-4 text-2xl font-bold lg:text-3xl">Workforce Development</h2>
                <p className=' text-lg'>
                  Nurture and empower our team through training
                  and growth opportunities.
                </p>
              </div>
              <div>
                <img src={satisfactionImage2} alt="" className='rounded-lg' />
              </div>
            </div>
            <div className='flex flex-col gap-7 md:flex-row items-center md:justify-between'>
              <div>
                <h2 className=" mb-4 text-2xl font-bold lg:text-3xl">Client Satisfaction</h2>
                <p className=' text-lg'>
                  Prioritize client satisfaction by meeting and
                  exceeding their unique needs and expectations.
                </p>
              </div>
              <div>
                <img src={satisfactionImage} alt="" className='rounded-lg' />
              </div>
            </div>
            <div className='flex flex-col gap-7 md:flex-row items-center md:justify-between'>
              <div>
                <h2 className=" mb-4 text-2xl font-bold lg:text-3xl">Innovation</h2>
                <p className=' text-lg'>
                  Substitute a culture of innovation to stay at the
                  forefront of the healthcare logistics industry.
                </p>
              </div>
              <div>
                <img src={satisfactionImage3} alt="" className='rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Goals