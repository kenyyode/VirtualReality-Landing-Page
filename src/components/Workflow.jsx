import image from '../assets/code.jpg';
import { BadgeCheck } from "lucide-react";
import { checklistItems } from '../constants';

const Workflow = () => {
    return (
        <div className="flex flex-col mt-20 items-center justify-center">
            <p className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-center"> Accelerate your {" "} 
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-transparent bg-clip-text">coding workflow</span>
                </p>
            <div className='sm:flex items-center justify-center sm:max-w-4xl lg:max-w-5xl mt-10 gap-6'> 
                <img src={image} alt="workflow image" className="sm:w-1/2 h-auto"/>
                <div className='flex flex-col gap-6'> 
                    {checklistItems.map((item, index) => (
                        <div key={index} className='flex gap-4'>
                            <div className='text-green-500 bg-slate-950 h-10 w-10 text-center p-2 rounded-full items-center justify-center'> <BadgeCheck /> </div>
                            <div className='flex flex-col gap-2'> 
                                <div className='font-medium'> {item.title} </div>
                                <div className='text-neutral-400 text-sm'> {item.description} </div>
                            </div>
                            
                        </div> 
                    ))}

                </div>
    
            </div>
        </div>
    )
}

export default Workflow;