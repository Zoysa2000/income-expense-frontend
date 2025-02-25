import axios from "axios";


const Incomeapi = (incomeDetails) => {

   return  axios.post('http://127.0.0.1:8000/api/add-income', incomeDetails)

};

export default Incomeapi;