import { buy_laptop } from "../actions/actionTypes"

const initialLaptopState = {numOfLaptops : 100}


const laptopReducer = (state=initialLaptopState,action)=>{
    switch(action.type){
        case buy_laptop: return {numOfLaptops:state.numOfLaptops-1};
        default :return state;
    }
}



export default laptopReducer;