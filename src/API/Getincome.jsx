import axios from "axios";


const Getincome = () => {
    return axios.get('http://127.0.0.1:8000/api/get-income')
}

export default Getincome;