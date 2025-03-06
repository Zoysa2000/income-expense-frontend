
import axios from "axios";

const DeleteExpenseraw = (id) => {
    return  axios.post('http://127.0.0.1:8000/api/delete-expense', id)
};

export default DeleteExpenseraw;