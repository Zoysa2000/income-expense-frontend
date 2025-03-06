import { useEffect, useState } from "react";

import Getexpense from "../../API/Getexpense.js";

const Expensetable = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const fetchAllExpense = async () => {
            try {
                const response = await Getexpense();
                console.log("API Response:", response.data); // Debugging API response

                if (response.data && Array.isArray(response.data.allExpense)) {
                    setDetails(response.data.allExpense);
                } else {
                    setDetails([]); // the response is empty set the null array in details
                }
            } catch (error) {
                console.error("Error fetching income data:", error);
                setDetails([]);
            }
        };
        fetchAllExpense();
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
                            details.map((expense) => (
                                <tr key={expense.id} className="bg-white dark:bg-gray-800">
                                    <td className="px-6 py-4">{expense.id || "N/A"}</td>
                                    <td className="px-6 py-4">{expense.amount || "N/A"}</td>
                                    <td className="px-6 py-4">{expense["expense_category"] || expense.expense_category || "N/A"}</td>
                                    <td className="px-6 py-4">
                                        {expense.created_at ? new Date(expense.created_at).toLocaleDateString() : "N/A"}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center">
                                    No Expense Data Available
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

export default Expensetable;