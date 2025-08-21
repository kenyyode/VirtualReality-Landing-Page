import { resourcesLinks } from "../constants";
import { platformLinks } from "../constants";
import { communityLinks } from "../constants";

const Footer = () => {

    return(
        <div> 
            <footer className=" border-t border-neutral-600 drop-shadow-lg bg-neutral-950 w-full">
                <div className=" grid gap-6 lg:flex lg:justify-between items-center mx-auto max-w-4xl px-6 py-10"> 
                <div className="grid gap-2"> 
                    <h3 className="font-medium text-lg"> Resources </h3>
                    <ul className="grid gap-2 text-sm text-neutral-300">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}> 
                            <a href={link.href} className="">{link.text}</a>

                            </li> ))}
                    </ul>
                </div>
                <div className="grid gap-2"> 
                    <h3 className="font-medium text-lg"> Platform </h3>
                    <ul className="grid gap-2 text-sm text-neutral-300">
                        {platformLinks.map((link, index) => (
                            <li key={index}> 
                            <a href={link.href}>{link.text}</a>
                            </li> ))}
                    </ul>
                </div>
                <div className="grid gap-2">
                    <h3 className="font-medium text-lg"> Community </h3>
                    <ul className="grid gap-2 text-sm text-neutral-300">
                        {communityLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href}>{link.text}</a>
                            
                            </li> ))}
                    </ul>
                </div>
                </div>
            </footer>
        </div>
    )

};

export default Footer;