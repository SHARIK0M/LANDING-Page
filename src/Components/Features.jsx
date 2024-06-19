import features from "../assets/Features.jpg";
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const Features = () => {
  return (

    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id='feature'>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

        {/* cads val */}
            <motion.div className="lg:w-1/4"
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount : 0.}}
            >
          <h3 className=" text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Why we are better than others
          </h3>
          <p className="text-base text-tartiary  ">
            Te Ofrecemosla mejor logistica para planear de forma mas eficiente
            el modo en que serán transportados y almacenados los bienes que
            necesita trasladar.
          </p>
        </motion.div>
        {/* Features cards */}
        <motion.div className="w-full lg:w-3/4"
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount : 0.}}
        >
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8 ">

            <div className=" bg-[rgba(255, 255, 255, 0.04)] cursor-pointer rounded-[35px] h-96 shadow-3xl p-8  flex justify-center items-center hover:-translate-y-4 transition-all duration-300">
                <div>
                <img src={features} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
                </div>
            </div>
            <div className=" bg-[rgba(255, 255, 255, 0.04)] cursor-pointer md:mt-16 rounded-[35px] h-96 shadow-3xl p-8  flex justify-center items-center hover:-translate-y-4 transition-all duration-300">
                <div>
                <img src={features} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
                </div>
            </div>
            <div className=" bg-[rgba(255, 255, 255, 0.04)] cursor-pointer rounded-[35px] h-96 shadow-3xl p-8  flex justify-center items-center hover:-translate-y-4 transition-all duration-300">
                <div>
                <img src={features} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
                </div>
            </div>

            </div>
        </motion.div>
        


        </div>
    </div>
  )
}

export default Features