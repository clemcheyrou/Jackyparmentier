import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export const Contact = () => {

    return (
        <div className="h-[100vh] flex flex-col py-4">
            <div className="flex-1 p-6">
                <img
                    src="/img1.jpg"
                    alt="img1"
                    className="w-full h-full object-cover border"
                />
            </div>

            <div className="flex-1 p-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="mt-28 text-center">
                    <p>jackyparmentier@gmail.com</p>
                    <p>06 28 05 69 07</p>
                </div>
                <div className="flex justify-center items-center space-x-6 m-auto text-social text-4xl mt-4">
                    <FaFacebook />
                    <FaSquareInstagram />
                </div>
            </div>
        </div>
    );
}