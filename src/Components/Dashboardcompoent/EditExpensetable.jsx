import Incomepop from "../Subcomponent/Incomepop.jsx";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Getexpense from "../../API/Getexpense.js";
import DeleteExpenseraw from "../../API/DeleteExpenseraw.jsx";
import Maindashboard from "../Maindashboard.jsx";

const EditExpensetable = () => {
    const [details, setDetails] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState("");

    useEffect(() => {
        const fetchAllExpense = async () => {
            try {
                const response = await Getexpense();
                console.log("API Response:", response.data);

                if (response.data && Array.isArray(response.data.allExpense)) {
                    setDetails(response.data.allExpense);
                } else {
                    setDetails([]);
                }
            } catch (error) {
                console.error("Error fetching expense data:", error);
                setDetails([]);
            }
        };
        fetchAllExpense();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await DeleteExpenseraw({ id });
            toast.success(response.data.message, { position: "top-center" });
        } catch (error) {
            toast.error("Failed to delete expense.", { position: "top-center" });
            console.error("Error deleting expense:", error);
        }
    };

    const filteredDetails = details.filter((expense) => {
        if (!selectedMonth) return true;
        const expenseDate = new Date(expense.created_at);
        const expenseMonth = `${expenseDate.getFullYear()}-${String(expenseDate.getMonth() + 1).padStart(2, "0")}`;
        return expenseMonth === selectedMonth;
    });

    return (
        <div>
            <Maindashboard />
            <div className="p-4 sm:ml-64">
                <div className="mt-20">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Filter by Month:
                    </label>
                    <select
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                        <option value="">All Months</option>
                        <option value="2025-01">January</option>
                        <option value="2025-02">February</option>
                        <option value="2025-03">March</option>
                        <option value="2025-04">April</option>
                        <option value="2025-05">May</option>
                        <option value="2025-06">June</option>
                        <option value="2025-07">July</option>
                        <option value="2025-08">August</option>
                        <option value="2025-09">September</option>
                        <option value="2025-10">October</option>
                        <option value="2025-11">November</option>
                        <option value="2025-12">December</option>
                    </select>
                </div>

                <div className="overflow-x-auto mt-5">
                    <span className="self-center text-xl font-semibold sm:text-2xl">My Expense Table</span>
                    <div className="max-h-48 overflow-y-auto mt-5">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">Amount</th>
                                <th scope="col" className="px-6 py-3">Expense Category</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Delete</th>
                                <th scope="col" className="px-6 py-3">Update</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {filteredDetails.length > 0 ? (
                                filteredDetails.map((expense) => (
                                    <tr key={expense.id} className="bg-white">
                                        <td className="px-6 py-4">{expense.id || "N/A"}</td>
                                        <td className="px-6 py-4">{expense.amount || "N/A"}</td>
                                        <td className="px-6 py-4">{expense.expense_category || "N/A"}</td>
                                        <td className="px-6 py-4">
                                            {expense.created_at ? new Date(expense.created_at).toLocaleDateString() : "N/A"}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                type="button"
                                                onClick={() => handleDelete(expense.id)}
                                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Incomepop id={expense.id} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 text-center">
                                        No Expense Data Available
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
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
        </div>
    );
};

export default EditExpensetable;
