
import {useState} from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";
import {Link} from "react-router-dom";
const Transactionbtn = () => {

    const [isOpen, setIsopen]= useState(false);

    return (
        <li>
            <Link to="#" onClick={(e)=>
            {
              e.preventDefault();
                setIsopen((prev) => !prev);
            }}
               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <IoIosArrowDropdownCircle
                    className= {isOpen ? "hidden"
                        : 'shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'}
                />

                        <IoMdArrowDropupCircle
                            className= {isOpen ? "shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        : 'hidden'}
                        />

                <span className="flex-1 ms-3 whitespace-nowrap">Transaction Management</span>
            </Link>

            <ul className={isOpen ? "py-2 space-y-4" : 'hidden'}>
                <div className="ml-12 flex items-center  space-x-1  rounded-lg hover:bg-gray-300 p-1 text-gray-800">
                    <AiFillPlusCircle className="h-5 w-5 "/>
                    <Link to="/income">
                        <li>Add Income</li>
                    </Link>
                </div>
                <div className="ml-12 flex items-center  space-x-1 rounded-lg hover:bg-gray-300 p-1 text-gray-800">
                    <AiFillPlusCircle className="h-5 w-5 "/>
                    <Link to="/expense">
                        <li>Add Expense</li>
                    </Link>

                </div>
                <div className="ml-12 flex items-center  space-x-1 rounded-lg hover:bg-gray-300 p-1 text-gray-800">
                    <AiFillPlusCircle className="h-5 w-5 "/>
                    <Link to="/budget">
                        <li>Add Budget</li>
                    </Link>

                </div>
            </ul>

        </li>
    );
};

export default Transactionbtn;