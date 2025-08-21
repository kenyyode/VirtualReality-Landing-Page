import { pricingOptions } from "../constants";
import {CircleCheck} from "lucide-react";


const Pricing = () => {
    return (
        <div className="max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center mb-16">Pricing Plans</h2>
            <div className="sm:grid grid-cols-3 gap-6"> 
                {pricingOptions.map((option, index) => (
                    <div key={index} className=" grid gap-12 border border-gray-500 rounded-lg p-6 mb-10 ">
                        <div className="grid gap-4"> 
                            <h3> {option.title} {index===1 && <span className="badge">(most Popular)</span>} </h3>
                            <p className="text-2xl font-medium"> {option.price} <span className="text-xs text-neutral-400">/month</span></p>
                            <ul className="grid gap-4 text-sm">
                                {option.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-center">
                                     <CircleCheck className="text-white mr-2" />
                                     {feature}
                                 </li>
                                ))}
                            </ul>
                        </div>

                         <button className="border border-white rounded-lg px-12 py-2 w-full hover:bg-orange-800"> Subscribe </button>
                        

                    </div>
                ))}

            </div>
        </div>
    )
};

export default Pricing;