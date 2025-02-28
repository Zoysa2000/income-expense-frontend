import { RiMoneyDollarCircleFill } from "react-icons/ri";
import {Link} from "react-router-dom";

const Bugetbtn = () => {
    return (
        <li>
            <Link to="/budget"
               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <RiMoneyDollarCircleFill
                    className="shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Buget Management</span>
                <span
                    className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </Link>
        </li>
    );
};

export default Bugetbtn;