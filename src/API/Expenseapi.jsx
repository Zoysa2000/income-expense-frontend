import axios from "axios";


const Expenseapi = (expenseDetails) => {
    return  axios.post('http://127.0.0.1:8000/api/add-expense', expenseDetails)
};

export default Expenseapi;