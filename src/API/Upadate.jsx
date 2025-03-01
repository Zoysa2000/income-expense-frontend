import axios from "axios";


const Upadate = (updateDetails) => {
    return axios.post('http://127.0.0.1:8000/api/update-income', updateDetails)

};

export default Upadate;