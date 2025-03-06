

import { useEffect, useState } from "react";

import { Chart } from "react-google-charts";
import Getexpense from "../../API/Getexpense.js";

const ExpenseGraph = () => {
    const [details, setDetails] = useState([]);
    const [chartData, setChartData] = useState([["Month", "Total Expense"]]); // Default header
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchAllExpense = async () => {
            try {
                const response = await Getexpense();
                console.log("API Response:", response.data);

                if (response.data && response.data.allExpense) {
                    setDetails(response.data.allExpense);
                } else {
                    setDetails([]);
                }
            } catch (error) {
                console.error("Error fetching income data:", error);
                setDetails([]);
            }
        };
        fetchAllExpense();
    }, []);

    useEffect(() => {
        if (details.length === 0) return;

        // Calculate monthly income
        const monthlyExpense = {};
        let amount = 0;

        details.forEach((expense) => {
            const expenseDate = new Date(expense.created_at);
            const expenseMonth = `${expenseDate.getFullYear()}-${String(expenseDate.getMonth() + 1).padStart(2, "0")}`;

            if (!monthlyExpense[expenseMonth]) {
                monthlyExpense[expenseMonth] = 0;
            }

            monthlyExpense[expenseMonth] += expense.amount;
            amount += expense.amount;
            localStorage.setItem("totalExpense", amount);
            setTotalAmount(amount);

        });


        // Convert object to array format for Chart
        const monthlyExpenseArray = Object.entries(monthlyExpense).map(([month, total]) => [month, total]);

        console.log("Formatted Chart Data:", [["Month", "Total Income"], ...monthlyExpenseArray]);

        // Update state with new chart data
        setChartData([["Month", "Total Income"], ...monthlyExpenseArray]);
    }, [details]);



    const options2 = {
        chart: {
            title: "My Monthly Expense",
            subtitle: "Expense collected over different months",
        },
        colors: ["#FF2C2C"],
    };

    return (
        <div>

            <div className="flex-1">
                {chartData.length > 1 ? (
                    <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
                        data={chartData}
                        options={options2}
                        className="mt-20"
                    />
                ) : (
                    <p>Loading chart data...</p>
                )}
                <span
                    className="self-center text-xl font-semibold sm:text-2xl mt-5">My Total Expense Amount is LKR {totalAmount}</span>
            </div>


        </div>
    );
};

export default ExpenseGraph;