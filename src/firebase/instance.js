import axios from "axios";

export default axios.create({
    baseURL: 'https://amusnet-default-rtdb.europe-west1.firebasedatabase.app/.json'
})