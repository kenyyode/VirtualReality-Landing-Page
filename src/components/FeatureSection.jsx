import { features } from "../constants";

const FeatureSeaction = () => {
    return (
        <div className="flex flex-col items-center justify-center m-auto mt-10"> 
            <div className="text-center">
                <span className="text-orange-500 bg-neutral-900 rounded-full h-6 px-2 py-1 tracking-tight text-center font-medium text-sm"> FEATURE </span>
                <p className="text-center text-4xl lg:text-5xl mt-10"> Easily build{" "} 
                    <span className="bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text"> your code </span> 
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 items-center justify-center mt-10 max-w-5xl gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-6 items-top mt-6 h-full w-auto text-left"> 
                            <div className="text-orange-500 bg-slate-950 rounded-full h-10 w-10 p-2 items-center justify-center">{feature.icon} </div>
                            <div className="flex flex-col gap-4"> 
                                <p className=""> {feature.text}</p>
                                <p className="text-sm text-neutral-400 tracking-tight"> {feature.description}</p>
                            </div>
                        
                        </div>
                    ))}
                </div>



            </div>
        </div>
    )
};
export default FeatureSeaction;