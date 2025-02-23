
import Maindashboard from "../Maindashboard.jsx";
import {IoMdAddCircle} from "react-icons/io";
import {useState} from "react";

const Income = () => {

    const [incomeDetails, setIncomeDetails] = useState({
        amount: 0,
        type: "",
    }); // define the object



    // define the function to form click
     const handleOnChange = (e) =>
     {
      const {value, name} = e.target;
      console.log (value,name) // destructuring the variable

          setIncomeDetails((prevState)=>(
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
    return (
        <>
        <Maindashboard/>
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700 mt-20">
                <section className="bg-white dark:bg-gray-900">
                    <div className="p-4 mx-auto max-w-2xl ">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Add New Income</h2>
                        <form action="#">
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-2">
                                    <label htmlFor="name"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Income
                                        Amount</label>
                                    <input type="number" name="amount" id="name"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                           placeholder="Type income amount" required="" onChange={handleOnChange}/>
                                </div>
                                <div>
                                    <label htmlFor="category"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select id="category"  name="category" onChange={handleOnChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Monthly Salary</option>
                                        <option value="Side Project">Side Project</option>
                                        <option value="Youtube Revenue">Youtube Revenue</option>
                                    </select>
                                </div>
                            </div>
                            <button type="button"
                                    className="text-white mt-6 bg-[#050708] w-full  lg:w-1/3 hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 gap-2">
                                <IoMdAddCircle className="h-5 w-5 "/>
                                Add My Income
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>


        </>
    )
        ;
};

export default Income;