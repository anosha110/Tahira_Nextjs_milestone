// About
import { AiFillDiscord, AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";

export default function Body(){
    return(
        <div className="w-screen h-screen">
            <div className="my-24 mx-5">
                <p className="text-4xl">Hi, Myself</p>
            <p className="text-5xl mt-2"><span className="text-green-400">Tahira</span> Ansari</p>
            <p className="text-4xl mt-2">And Im a <span className="text-blue-400 font-bold">Frontend Developer</span></p>
            <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum iste corrupti asperiores nihil quae. Quia facilis necessitatibus mollitia, illo alias ipsam. Explicabo voluptas ducimus delectus, a aspernatur incidunt! Quae, distinctio?</p>
            
            <div className="flex my-5 gap-2 w-48">
                <div className="flex my-2 md:w-full mx-auto">
                    <a href="#">
                        <AiFillGithub className="size-11 cursor-pointer" />
                    </a>

                    <a href="#">
                        <AiFillFacebook className="size-11 cursor-pointer text-blue-700"/>
                    </a>
                    <a href="#">
                        <AiFillInstagram className='size-11 text-pink-600 cursor-pointer'/>
                    </a>
                    <a href="#">
                        <AiFillDiscord className="size-11 cursor-pointer text-purple-400" />
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
}