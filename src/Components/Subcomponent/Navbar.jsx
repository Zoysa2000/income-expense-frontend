
import Togglebtn from "../Button/Togglebtn.jsx";

const Navbar = () => {
    return (
        <div>
            <nav
                className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <Togglebtn/>
                            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                                <img src="https://cdn-icons-png.flaticon.com/512/4697/4697083.png" className="h-8 me-3"
                                     alt="FlowBite Logo"/>
                                <span
                                    className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">ExpenseEase</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;