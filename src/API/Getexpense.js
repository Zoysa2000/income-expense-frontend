import axios from "axios";


const Getexpense = () => {
    return axios.get('http://127.0.0.1:8000/api/get-expense');

};

export default Getexpense;