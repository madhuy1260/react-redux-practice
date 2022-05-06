import { fetchRequest,fetchRequestSuccess,fetchRequestFail } from "../actions/actionTypes"

const initialUsersState ={
    data:[],
    isLoading:false,
    error:''
}



const usersReducer=(state=initialUsersState,action)=>{
    switch(action.type){
        case fetchRequest :
            return({...state,isLoading:true});
        case fetchRequestSuccess:
            return({...state,isLoading:false,data:action.data,error:''})
        case fetchRequestFail :
            return({...state,isLoading:false,data:[],error:action.data});
        default : return state;  
    }
}

export default usersReducer