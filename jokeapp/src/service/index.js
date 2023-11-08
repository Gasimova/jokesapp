import axios from "axios";
import { baseUrl } from "../constant/baseUrl";


export const getJokes = async ()=> {
    try {
        const url = baseUrl + '/search?limit=10'
        const res = axios({headers:{Accept:'application/json'}, method:'GET', url})
        return res
    } catch (error) {
        console.log(error, 'error');
    }
}