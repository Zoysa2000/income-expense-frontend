import { useEffect, useState } from "react";
import Getincome from "../../API/Getincome.jsx";

const Incometable = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const fetchAllIncomes = async () => {
            try {
                const response = await Getincome();
                console.log("API Response:", response.data); // Debugging API response

                if (response.data && Array.isArray(response.data.allIncomes)) {
                    setDetails(response.data.allIncomes);
                } else {
                    setDetails([]);
                }
            } catch (error) {
                console.error("Error fetching income data:", error);
                setDetails([]);
            }
        };
        fetchAllIncomes();
    }, []);

    return (
        <div>
            <div className="overflow-x-auto mt-7">
                <div className="max-h-48 overflow-y-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Amount</th>
                            <th scope="col" className="px-6 py-3">Income Category</th>
                            <th scope="col" className="px-6 py-3">Date</th>
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

export default Incometable;

