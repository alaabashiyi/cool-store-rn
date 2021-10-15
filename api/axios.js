import axios from "axios";
const url = 'http://localhost:3001/api/items';

export const getProducts = ({ page, keyword }) => {
    return axios.get(`${url}?page=${page}&keyword=${keyword}`)
}