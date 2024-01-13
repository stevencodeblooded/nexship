import { Link } from "react-router-dom"

const NoAnswer = () => {
  return (
    <div className=" bg-blue-50">
      <section className="px-4 pt-5 pb-10 max-w-7xl mx-auto">
        <div className=" max-w-md mx-auto">
          <div className="flex flex-col gap-5 text-center">
            <h1 className="text-3xl font-bold leading-snug">Didn't find an answer?</h1>
            <p className="font-medium mb-10">
              If you cannot find answer to your question in our FAQ, you can always
              contact us.We will answer you shortly!
            </p>
            <div>
              <Link to={'/'} className="bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">Ask Your Questions Here!</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NoAnswer