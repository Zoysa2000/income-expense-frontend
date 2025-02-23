
import { MdDashboard } from "react-icons/md";
import {Link} from "react-router-dom";
const Dashbtn = () => {
    return (
        <li>
            <Link to="#"
               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MdDashboard
                    className="shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="ms-3">Dashboard</span>
            </Link>
        </li>
    );
};

export default Dashbtn;