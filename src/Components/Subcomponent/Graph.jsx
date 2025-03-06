import { useEffect, useState } from "react";
import Getincome from "../../API/Getincome.jsx";
import { Chart } from "react-google-charts";

const Graph = () => {
    const [details, setDetails] = useState([]);
    const [chartData, setChartData] = useState([["Month", "Total Income"]]); // Default header
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchAllIncomes = async () => {
            try {
                const response = await Getincome();
                console.log("API Response:", response.data);

                if (response.data && response.data.allIncomes) {
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

    useEffect(() => {
        if (details.length === 0) return;

        // Calculate monthly income
        const monthlyIncome = {};
        let amount = 0;

        details.forEach((income) => {
            const incomeDate = new Date(income.created_at);
            const incomeMonth = `${incomeDate.getFullYear()}-${String(incomeDate.getMonth() + 1).padStart(2, "0")}`;

            if (!monthlyIncome[incomeMonth]) {
                monthlyIncome[incomeMonth] = 0;
            }

            monthlyIncome[incomeMonth] += income.amount;
            amount += income.amount;
            localStorage.setItem("totalAmount", amount);
            setTotalAmount(amount);

        });


        // Convert object to array format for Chart
        const monthlyIncomeArray = Object.entries(monthlyIncome).map(([month, total]) => [month, total]);

        console.log("Formatted Chart Data:", [["Month", "Total Income"], ...monthlyIncomeArray]);

        // Update state with new chart data
        setChartData([["Month", "Total Income"], ...monthlyIncomeArray]);
    }, [details]);

    const options1
        = {
        chart: {
            title: "My Monthly Income",
            subtitle: "Income collected over different months",
        },
        colors: ["#38CF30"],
    };


    return (
        <div>
            {chartData.length > 1 ? (
                        <Chart
                            chartType="Bar"
                            width="100%"
                            height="400px"
                            data={chartData}
                            options={options1}
                            className="mt-20"
                        />
                    ) : (
                        <p>Loading chart data...</p>
                    )}
                    <span className="self-center text-xl font-semibold sm:text-2xl mt-5">My Total Income Amount is LKR {totalAmount}</span>





        </div>
    );
};

export default Graph;
