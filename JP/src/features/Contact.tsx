import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export const Contact = () => {

    return (
        <div className="w-full h-[100vh] bg-cover bg-center bg-no-repeat m-0 relative" style={{ backgroundImage: "url('/contact_bg.png')" }}>
      <div className="min-h-[100vh] w-[800px] max-w-full mx-auto px-4 sm:px-8 md:px-20 lg:px-24 pt-32">
      <div className="flex-1 p-6">
                <img
                    src="/contact_img.png"
                    alt="img1"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1 p-6">
                <p>Nous avons déjà participé à tous types d'évènements: fêtes de village, festivals de fanfare, beaujolais, carnavals, mariages, marches engagées, embellissements d'autoroute, tournées de bars et ce dans de nombreux coins d'Europe et de Navarre!</p>
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
        </div>
    );
}