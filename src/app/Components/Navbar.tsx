"use client";
// import { useEffect, useState } from "react";
import Link from 'next/link'
// import { useRouter } from 'next/router'

export default function Navbar(){
// const [activeItem, setActiveItem] = useState<string>('')

// useEffect(() =>{
// }, [])
// return(
//      <div>
//         <span className="font-bold text-green">{activeItem}</span>
    

//     <div className="flex space-x-3 mx-5 my-5 text-red-400 font-lg">
//     {activeItem !== 'About' && (
//             <Link href= '/' legacyBehavior>
//         <a>
//             <span onClick={()=>setActiveItem('About')}>About</span>
//         </a>
//     </Link>
//         )}

// {activeItem !== 'Projects' && (
//             <Link href= '/projects' legacyBehavior>
//         <a>
//             <span onClick={()=>setActiveItem('Projects')}>Projects</span>
//         </a>
//     </Link>
//         )}

// {activeItem !== 'Resume' && (
//             <Link href= '/resume' legacyBehavior>
//         <a>
//             <span onClick={()=>setActiveItem('Resume')}>Resume</span>
//         </a>
//     </Link>
//         )}
//     </div>
//    </div>
// );
    return(
        <div className="bg-gradient-to-r from-green to-blue-500 text-white m-2 rounded-full h-14 shadow-xl">
            <div className="flex justify-end gap-3 mx-5 my-3">
                <Link href= '/' className="hover:text-blue-950">About</Link>
                <Link href= '/resume' className="hover:text-blue-950">Resume</Link>
                <Link href= '/projects' className="hover:text-blue-950">Projects</Link>
                <Link href= '/services' className="hover:text-blue-950">Services</Link>
            </div>
        </div>
    );
}