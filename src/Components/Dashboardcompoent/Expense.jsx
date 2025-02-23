
import Maindashboard from "../Maindashboard.jsx";
const Expense = () => {
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
                                        <input type="number" name="income-amount" id="name"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="Type expense amount" required=""/>
                                    </div>
                                    <div>
                                        <label htmlFor="category"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                        <select id="category"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option selected="">Monthly Salary</option>
                                            <option value="TV">Side Project</option>
                                            <option value="PC">Youtube Revenue</option>
                                        </select>
                                    </div>


                                </div>
                                <button type="button"
                                        className="text-white mt-6 bg-[#050708] w-full  lg:w-1/3 hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 ">
                                    <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false"
                                         data-prefix="fab" data-icon="apple" role="img"
                                         xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                                    </svg>
                                    Sign in with Apple
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>

        </div>

    );
};

export default Expense;