// import { Icon } from "next/dist/lib/metadata/types/metadata-types";
// import { IconType } from "react-icons";
import { BsCircleFill } from "react-icons/bs";

export default function MyResume(){
    return(
        <div className="px-6 py-2">
            {/* Education and Experience */}
            <div className="grid gap-6 md:grid-cols-2 my-7">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
               Information Technology
            </h5>
            <p className="font-semibold">University of Sindh (2020-2023)</p>
            <p className="my-3">
              I am Complete my graduation BS.IT in Faculty of Engineering & Technology
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer</h5>
            <p className="font-semibold">Media Agency</p>
            <p className="my-3">I dont know why I am doing this job</p>
          </div>
        </div>
      </div>


        <div className="grid gap-6 md:grid-cols-2 my-7">
            <div>
                <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                <div className="my-2">
                    <div className="my-2 text-white bg-gray-300 rounded-full">
                        <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500" style={{width:'90%'}}>
                        <a href="#" ><BsCircleFill className='cursor-pointer mr-3'/></a>
                        <p>Typescript</p>
                        </div>
                    </div>
                </div>

                <div className="my-2">
                    <div className="my-2 text-white bg-gray-300 rounded-full">
                        <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500" style={{width:'50%'}}>
                        <a href="#" ><BsCircleFill className='cursor-pointer mr-3'/></a>
                        <p>Python</p>
                        </div>
                    </div>
                </div>

                <div className="my-2">
                    <div className="my-2 text-white bg-gray-300 rounded-full">
                        <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500" style={{width:'75%'}}>
                        <a href="#" ><BsCircleFill className='cursor-pointer mr-3'/></a>
                        <p>Flutter</p>
                        </div>
                    </div>
                </div>

                <div className="my-2">
                    <div className="my-2 text-white bg-gray-300 rounded-full">
                        <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500" style={{width:'60%'}}>
                        <a href="#" ><BsCircleFill className='cursor-pointer mr-3'/></a>
                        <p>HTML,CSS</p>
                        </div>
                    </div>
                </div>

                <div className="my-2">
                    <div className="my-2 text-white bg-gray-300 rounded-full">
                        <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500" style={{width:'76%'}}>
                        <a href="#" ><BsCircleFill className='cursor-pointer mr-3'/></a>
                        <p>Javascript</p>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                <div className="my-2">
                <div className="my-2 text-white bg-gray-300 rounded-full">
                        <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500" style={{width:'86%'}}>
                        <a href="#" ><BsCircleFill className='cursor-pointer mr-3'/></a>
                        <p>MS Office</p>
                        </div>
                    </div>
                </div>

                <div className="my-2">
                <div className="my-2 text-white bg-gray-300 rounded-full">
                        <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500" style={{width:'66%'}}>
                        <a href="#" ><BsCircleFill className='cursor-pointer mr-3'/></a>
                        <p>Figma</p>
                        </div>
                    </div>
                </div>

                <div className="my-2">
                <div className="my-2 text-white bg-gray-300 rounded-full">
                        <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500" style={{width:'56%'}}>
                        <a href="#" ><BsCircleFill className='cursor-pointer mr-3'/></a>
                        <p>Photoshop</p>
                        </div>
                    </div>
                </div>

                <div className="my-2">
                <div className="my-2 text-white bg-gray-300 rounded-full">
                        <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500" style={{width:'80%'}}>
                        <a href="#" ><BsCircleFill className='cursor-pointer mr-3'/></a>
                        <p>MySQL DB</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            {/* Languages and Tools */}
        </div>
    );
}