
import Maindashboard from "../Maindashboard.jsx";
import { AiFillMinusCircle } from "react-icons/ai";
import {useState} from "react";
import {Bounce, toast, ToastContainer} from "react-toastify";
import Expenseapi from "../../API/Expenseapi.jsx";
import "react-toastify/dist/ReactToastify.css";
import Expensetable from "./Expensetable.jsx";
const Expense = () => {
    const storedIncome = localStorage.getItem("totalAmount");
    const incomeAmount = storedIncome ? parseFloat(storedIncome) : 0;
    const storedExpense = localStorage.getItem("totalExpense");
    const expenseAmount = storedExpense ? parseFloat(storedExpense) : 0;

    const[expenseDetails, setExpense] =useState(
        {
            'amount':0,
            "expense_category":"",
        }
    )

    const handleOnchange=(event)=>
    {
        const {value,name}=event.target;

        setExpense((prevState)=>(
            {
                ...prevState, [name] : value
                // spread operator
                //{ salary: "", bonus: "", tax: "" }
                //setIncomeDetails((prevState) => ({
                //   ...prevState,
                //   salary: "50000"
                // }));
                //{ salary: "50000", bonus: "", tax: "" }

            }
        ))

    }
    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            // Make API request
            if(incomeAmount>expenseAmount)
            {
                const response = await Expenseapi(expenseDetails);
                toast.success(response.data.message, { position: "top-center" });
            }
            else
            {
                toast.error("You have not any Saving! Please try again.", { position: "top-center" });
            }
        } catch (error) {
            if (error.response.data.errors) {
                const errors = error.response.data.errors;

                if (errors.amount) {
                    toast.error(errors.amount[0], { position: "top-center" });
                }

                if (errors.expense_category) {
                    toast.error(errors.expense_category[0], { position: "top-center" });
                }
            } else {

                toast.error("Network error! Please try again.", { position: "top-center" });
            }
        }
    };



    return (
        <div>
            <Maindashboard/>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-20">
                    <section className="bg-white dark:bg-gray-900">
                        <div className=" p-4 mx-auto max-w-2xl ">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Add New Expense</h2>
                            <form action="#">
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="name"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expense
                                            Amount</label>
                                        <input type="number" name="amount" id="name" onChange={handleOnchange}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="Type expense amount" required=""/>
                                    </div>
                                    <div>
                                        <label htmlFor="category"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                        <select  onChange={handleOnchange} name="expense_category"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option>Select category</option>
                                            <option value="Food">Food</option>
                                            <option value="Transportation">Transportation</option>
                                            <option value="Utilities">Utilities</option>
                                            <option value="Medical/Healthcare">Medical/Healthcare</option>
                                            <option value="Entertainment">Entertainment</option>
                                            <option value="Entertainment">Entertainment</option>
                                            <option value="Personal">Personal</option>
                                        </select>
                                    </div>


                                </div>
                                <button type="button" onClick={onSubmit}
                                        className="text-white mt-6 bg-[#050708] w-full  lg:w-1/3 hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 gap-2">
                                    <AiFillMinusCircle className="h-5 w-5 "/>
                                    Add My Expense
                                </button>
                            </form>
                        </div>
                    </section>
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
                <Expensetable/>
            </div>

        </div>

    );
};

export default Expense;