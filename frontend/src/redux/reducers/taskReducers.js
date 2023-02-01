import { DELETE_DATA_FAIL, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS, GET_DATA_REQUEST, GET_DATA_SUCCESS,  GET_DATA_FAIL,TASK_DATA_FAIL, TASK_DATA_REQUEST, TASK_DATA_SUCCESS, UPDATE_DATA_FAIL, UPDATE_DATA_REQUEST, UPDATE_DATA_SUCCESS } from "../constans/taskContsnas"

export const TaskReducer = (state={datashow:[]}, {type, payload}) => {
    switch (type) {
        case TASK_DATA_REQUEST : return {loading: true } 
        case TASK_DATA_SUCCESS : return {loading: false, taskDataAdded: true } 
        case TASK_DATA_FAIL : return {loading: false, taskError:payload } 

        case GET_DATA_REQUEST : return {loading: true } 
        case GET_DATA_SUCCESS : return {loading: false, datashow:payload } 
        case GET_DATA_FAIL : return {loading: false, datashowError:payload } 

        case DELETE_DATA_REQUEST : return {loading: true } 
        case DELETE_DATA_SUCCESS : return {loading: false, taskRomove : true } 
        case DELETE_DATA_FAIL : return {loading: false,RemoveError : payload } 

        case UPDATE_DATA_REQUEST : return {loading: true } 
        case UPDATE_DATA_SUCCESS : return {loading: false, TaskUpdate : true} 
        case UPDATE_DATA_FAIL : return {loading: false, TaskUpdateError : payload } 
            
        default: return state
    }
}