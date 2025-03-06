import Maindashboard from "../Maindashboard.jsx";
import Graph from "../Subcomponent/Graph.jsx";
import ExpenseGraph from "../Subcomponent/ExpenseGraph.jsx";

const Chart = () => {
    // Retrieve income and expense amounts from local storage
    const storedIncome = localStorage.getItem("totalAmount");
    const incomeAmount = storedIncome ? parseFloat(storedIncome) : 0;
    const storedExpense = localStorage.getItem("totalExpense");
    const expenseAmount = storedExpense ? parseFloat(storedExpense) : 0;

    // Calculate savings balance
    const savingsBalance = incomeAmount - expenseAmount;
    const presentage = (savingsBalance/incomeAmount)*100

    return (
        <div>
            <Maindashboard />

            {/* Graphs Section */}
            <div className="p-8 sm:ml-64">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Graph />
                    </div>
                    <div>
                        <ExpenseGraph />
                    </div>
                </div>
            </div>

            {/* Savings Balance Section */}
            <div className="p-8 sm:ml-64">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <span className="text-xl font-semibold sm:text-2xl mt-10">
                            My Total Saving Balance Amount is LKR {savingsBalance}
                        </span>
                    </div>
                    <div>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div
                                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                style={{ width: "50%" }}
                            >
                                {Math.round(presentage)}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;
