import {useEffect, useState} from "react";
import Getincome from "../../API/Getincome.jsx";
import Deleteraw from "../../API/Deleteraw.jsx";


const EditIncometable = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const fetchAllIncomes = async () => {
            try {
                const response = await Getincome();
                console.log("API Response:", response.data); // Debugging API response

                if (response.data && Array.isArray(response.data.allIncomes)) {
                    setDetails(response.data.allIncomes);
                } else {
                    setDetails([]); // the response is empty set the null array in details
                }
            } catch (error) {
                console.error("Error fetching income data:", error);
                setDetails([]);
            }
        };
        fetchAllIncomes();
    }, []);
    const handleDelete = async (id) => {
       const response = await Deleteraw({id})
        const message = response.data.message;
       alert(message);
    };
    return (
        <div>

            <div className="overflow-x-auto mt-10">
                 <span
                     className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">My Income Table</span>
                <div className="max-h-48 overflow-y-auto mt-5">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Amount</th>
                            <th scope="col" className="px-6 py-3">Income Category</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Delete</th>
                            <th scope="col" className="px-6 py-3">Update</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {details.length > 0 ? (
                            details.map((income) => (
                                <tr key={income.id} className="bg-white dark:bg-gray-800">
                                    <td className="px-6 py-4">{income.id || "N/A"}</td>
                                    <td className="px-6 py-4">{income.amount || "N/A"}</td>
                                    <td className="px-6 py-4">{income["income-category"] || income.income_category || "N/A"}</td>
                                    <td className="px-6 py-4">
                                        {income.created_at ? new Date(income.created_at).toLocaleDateString() : "N/A"}
                                    </td>

                                    <td className="px-6 py-4">
                                        <button type="button"  onClick={() => handleDelete(income.id)}
                                                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete
                                        </button>
                                    </td>

                                    <td className="px-6 py-4">
                                        <button type="button"
                                                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center">
                                    No Income Data Available
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EditIncometable;