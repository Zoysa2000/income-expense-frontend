import { useEffect, useState } from "react";
import Getincome from "../../API/Getincome.jsx";
import Deleteraw from "../../API/Deleteraw.jsx";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Incomepop from "../Subcomponent/Incomepop.jsx";

const EditIncometable = () => {
    const [details, setDetails] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState("");

    useEffect(() => {
        const fetchAllIncomes = async () => {
            try {
                const response = await Getincome();
                console.log("API Response:", response.data);

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

    const handleDelete = async (id) => {
        const response = await Deleteraw({ id });
        toast.success(response.data.message, { position: "top-center" });
    };

    const filteredDetails = details.filter((income) => {
        if (!selectedMonth) return true; // if selected month is null store all details in array
        const incomeDate = new Date(income.created_at);
        const incomeMonth = `${incomeDate.getFullYear()}-${String(incomeDate.getMonth() + 1).padStart(2, "0")}`;
        console.log(incomeMonth)
        return incomeMonth === selectedMonth;
    });

    return (
        <div>
            <div className="mt-10">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filter by Month:</label>
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
                <span className="self-center text-xl font-semibold sm:text-2xl">My Income Table</span>
                <div className="max-h-48 overflow-y-auto mt-5">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
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
                        {filteredDetails.length > 0 ? (
                            filteredDetails.map((income) => (
                                <tr key={income.id} className="bg-white">
                                    <td className="px-6 py-4">{income.id || "N/A"}</td>
                                    <td className="px-6 py-4">{income.amount || "N/A"}</td>
                                    <td className="px-6 py-4">{income["income-category"] || income.income_category || "N/A"}</td>
                                    <td className="px-6 py-4">
                                        {income.created_at ? new Date(income.created_at).toLocaleDateString() : "N/A"}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button type="button" onClick={() => handleDelete(income.id)}
                                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                            Delete
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Incomepop id={income.id} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="px-6 py-4 text-center">
                                    No Income Data Available
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
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

export default EditIncometable;

