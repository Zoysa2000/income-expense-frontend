import { useState } from "react";
import Upadate from "../../API/Upadate.jsx";
import {Bounce, toast, ToastContainer} from "react-toastify";

const Incomepop = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [details, setDetails] = useState({
        "id": "",
        "amount": 0,
        "income-category": "",
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setDetails((prevState) => ({
            ...prevState,
            [name]: value, // Dynamically update state
        }));
    };

    const updateDetails = () => {
        setIsOpen(true);
        setDetails((prevDetails) => ({
            ...prevDetails, //spread operator
            id: props.id, // Ensure ID is set correctly
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page refresh

        try {
            const response = await Upadate(details); // API call
            toast.success(response.data.message, { position: "top-center" });

        } catch (error) {
            if (error.response) {
                const errorData = error.response.data;

                if (errorData.errors) {
                    console.log("Validation Errors:", errorData.errors);

                    // Display error messages in toast
                    Object.values(errorData.errors).forEach((messages) => {
                        messages.forEach((msg) => toast.error(msg, { position: "top-center" }));
                    });
                } else {
                    toast.error(errorData.error || "Something went wrong!", { position: "top-center" });
                }
            } else {
                toast.error("Network error or server is down!", { position: "top-center" });
            }
        }
    };


    return (
        <>
            {/* Modal toggle */}
            <button
                onClick={updateDetails}
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                type="button"
            >
                Update
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Update My Income
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        {/* Modal body */}
                        <form className="p-4" onSubmit={handleSubmit}>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="amount"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Income Amount
                                    </label>
                                    <input
                                        type="number"
                                        name="amount"
                                        onChange={handleOnChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type income amount"

                                    />
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="income-category"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Category
                                    </label>
                                    <select
                                        name="income-category"
                                        value={details["income-category"]}
                                        onChange={handleOnChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"

                                    >
                                        <option value="">Select category</option>
                                        <option value="Monthly Salary">Monthly Salary</option>
                                        <option value="Side Project">Side Project</option>
                                        <option value="Youtube Revenue">Youtube Revenue</option>
                                    </select>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Update My Income
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <ToastContainer
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    );
};

export default Incomepop;

