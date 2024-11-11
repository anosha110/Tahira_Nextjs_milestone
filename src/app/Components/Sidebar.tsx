import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import Image from 'next/image';

export default function Sidebar(){
    return(
        <div>
          <Image
  src="/assets/girl.png"
  alt="User avatar"
  className="w-48 mx-auto rounded-full"
  width={192}
  height={192}
/>

            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span className='text-green-400'>Tahira</span> 
                Ansari</h3>
                <p className='px-2 py-1 mt-3 bg-gray-200 rounded-full'>Web Designer</p>
                <a className='px-2 py-1 mt-3 bg-gray-200 rounded-full flex items-center justify-center' href='#' download='name'><GiTie className='w-6 h-6'/> Download Resume</a>
                
                {/* Social Icons */}
                <div className='flex justify-around my-5 text-green-500 md:w-full mx-auto'>
                    <a href="#">
                        <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                    </a>
                    <a href="#">
                        <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                    </a>
                    <a href="#">
                        <AiFillInstagram className='w-8 h-8 cursor-pointer'/>
                    </a>
                </div>
                {/* Address */}
                <div className='my-5 py-4 bg-grey-200' style= {{marginLeft: '-1rem', marginRight: '-1rem'}}>
                    <div className='flex items-center justify-center space-x-2'>
                        <GoLocation />
                        <span>Hyderabad, Pakistan</span>
                    </div>
                    <p className='my-2'>tahira@gmail.com</p>
                    <p className='my-2'>03031234567</p>
                </div>
                {/* Email Button */}
                <button className='px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105'>Email Me</button>
                <button className='px-5 py-2 my-4  text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 '>Toggle theme</button>
        </div>
    );
}