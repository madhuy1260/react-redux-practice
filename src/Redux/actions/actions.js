import { buy_laptop } from "./actionTypes"
import { buy_mobile } from "./actionTypes"
import { fetchRequest,fetchRequestSuccess,fetchRequestFail } from "../actions/actionTypes"
import axios from 'axios'

export const buyLaptop=()=>{
    return {type:buy_laptop}
}

export const buyMobile = () =>{
    return {type:buy_mobile}
}

export const fetchrequest = () => {
    return {
        type:fetchRequest
    }
}

export const fetchrequestSuccess = (users) => {
    return {
        type:fetchRequestSuccess,
        data:users
    }
}

export const fetchrequestFail = (error) => {
    return {
        type:fetchRequestFail,
        data:error
    }
}

export const fetching = () =>{
    return function(dispatch){
        dispatch(fetchrequest());
        axios.get('https://gorest.co.in/public/v2/users')
        .then(response=>{
            let fetchedData= response.data
            dispatch(fetchrequestSuccess(fetchedData))
        })
        .catch(error=>{
            dispatch(fetchrequestFail(error))
        })
    }
       
}