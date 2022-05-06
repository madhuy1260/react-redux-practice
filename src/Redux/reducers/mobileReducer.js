import { buy_mobile } from "../actions/actionTypes"

const initialMobileState = {numOfMobiles : 500}


const mobileReducer = (state=initialMobileState,action)=>{
    switch(action.type){
        case buy_mobile: return {numOfMobiles:state.numOfMobiles-1};
        default :return state;
    }
}



export default mobileReducer;