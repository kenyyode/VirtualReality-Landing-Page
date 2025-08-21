import { testimonials } from "../constants";

const Testimonials = () => {
    return (
        <div className="grid items-center justify-center text-center mt-20 mb-20"> 
            <h2 className="font-medium text-3xl lg:text-5xl mb-16"> What People are saying </h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 max-w-5xl mx-auto items-center justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className=" w-auto h-full p-6 text-left grid gap-4 border border-neutral-800 rounded-lg shadow-md bg-neutral-900"> 
                        <p className="text-neutral-300 text-md tracking-wide"> {testimonial.text} </p>
                        <div className="flex items-center space-x-4">
                            <img src={testimonial.image} alt={testimonial.user} className="w-10 h-10 border border-neutral-400 rounded-full" />
                            <div> 
                                <h3 className="text-md text-neutral-300">{testimonial.user}</h3>
                                <p className="text-sm text-neutral-500">{testimonial.company}</p>
                                </div>
                             </div>
                    </div>

                ))}
            </div>
        </div>
    )
};

export default Testimonials;