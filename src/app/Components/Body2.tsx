import { AiFillAndroid, AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

// Services
export default function MyServices()
{
    return(
        <div className="flex flex-col px-6 pt-1 flex-grow">
            <h5 className="my-3 font-medium"><span className="text-blue-400 text-3xl">I am</span> Complete my Graduation in BS.Information Technology from University of Sindh. I have 1 year of experience in Web Designing and I have a Likedein Account where I Showcase my Projects.</h5>
            
            <div className="p-4 mt-5 bg-gray-200 flex-grow" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
                <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
                <div className="grid gap-6 lg:grid-cols-2">
                                    
                <div className="bg-white rounded-lg lg:col-span-1 shadow-xl">
                <div className="flex items-center p-2 space-x-4">
                <a href="#" >
                        <AiFillAndroid className='w-12 h-12 cursor-pointer text-green-400'/>
                    </a>
                    <div className="flex flex-col px-2">
                    <h2 className="font-bold">Mobile App Developmet</h2>
                    <p className="text-sm text-gray-700">I can build a beautiful and sckable SPA using <span className="font-bold">Flutter</span> and <span className="font-bold">Dart</span></p>
                </div>
                </div>               
                </div>

                <div className=" bg-white rounded-lg lg:col-span-1 shadow-xl">
                <div className="flex items-center p-2 space-x-4">
                <a href="#" >
                        <RiComputerLine className='w-12 h-12 cursor-pointer text-green-400'/>
                    </a>
                    <div className="flex flex-col px-2">
                    <h2 className="font-bold">Frontend Development</h2>
                    <p className="text-sm  text-gray-700">I can build a beautiful and scalable SPA using <span className="font-bold">HTML,CSS,</span> and <span className="font-bold">Reat.js</span></p>
                </div>
                </div>
                </div> 

                <div className=" bg-white rounded-lg lg:col-span-1 shadow-xl">
                <div className="flex items-center p-2 space-x-4">
                <a href="#" >
                        <AiOutlineApi className='w-12 h-12 cursor-pointer text-green-400'/>
                    </a>
                    <div className="flex flex-col px-2">
                    <h2 className="font-bold">API Developmet</h2>
                    <p className="text-sm  text-gray-700">I can develop robust <span className="font-bold">REST API</span> using <span className="font-bold">django-rest-api</span> & <span className="font-bold">Node API</span></p>
                </div>
                </div>
                </div> 

                <div className=" bg-white rounded-lg lg:col-span-1 shadow-xl">
                <div className="flex items-center p-2 space-x-4">
                <a href="#" >
                        <FaServer className='w-12 h-12 cursor-pointer text-green-400'/>
                    </a>
                    <div className="flex flex-col px-2">
                    <h2 className="font-bold">Backened Development</h2>
                    <p className="text-sm  text-gray-700">Handle <span className="font-bold"> databsae, server, api</span> using <span className="font-bold">Express</span> & other popular frameworks</p>
                </div>
                </div>
                </div> 

                <div className=" bg-white rounded-lg lg:col-span-1 shadow-xl">
                <div className="flex items-center p-2 space-x-4">
                <a href="#" >
                        <MdDeveloperMode className='w-12 h-12 cursor-pointer text-green-400'/>
                    </a>
                    <div className="flex flex-col px-2">
                    <h2 className="font-bold">Competitive Coder</h2>
                    <p className="text-sm  text-gray-700">a daily problem solver in <span className="font-bold">HackaRank</span> and <span className="font-bold">Leet Code</span></p>

                </div>
                </div>
                </div> 

                <div className="bg-white rounded-lg lg:col-span-1 shadow-xl">
                <div className="flex items-center p-2 space-x-4">
                <a href="#" >
                        <AiOutlineAntDesign className='w-12 h-12 cursor-pointer text-green-400'/>
                    </a>
                    <div className="flex flex-col px-2">
                    <h2 className="font-bold">UI/UX designer</h2>
                    <p className="text-sm  text-gray-700">stunning user interface designer using <span className="font-bold">Figma</span> and <span className="font-bold">Framer</span></p>

                </div>
                </div>
                </div>
                </div>
 
            </div>
            </div>
    );

}