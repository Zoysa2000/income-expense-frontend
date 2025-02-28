import axios from "axios";


const Deleteraw = (id) => {
    return  axios.post('http://127.0.0.1:8000/api/delete-income', id)
};

export default Deleteraw;