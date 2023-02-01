import axios from "axios";
import { TASK_DATA_REQUEST, TASK_DATA_SUCCESS, TASK_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS,
    GET_DATA_FAIL, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS,DELETE_DATA_FAIL, UPDATE_DATA_REQUEST,UPDATE_DATA_SUCCESS, UPDATE_DATA_FAIL} from "../constans/taskContsnas";


export const TaskDataAction = taskData => async dispatch => {
    try {
        dispatch({type:  TASK_DATA_REQUEST})
        const {data} =  await axios.post(`http://localhost:5000/task/add`, taskData)
        dispatch({type:  TASK_DATA_SUCCESS, payload: data.result})
    } catch (error) {
        dispatch({type:  TASK_DATA_FAIL, payload: error.message})
    }
}

 export const ShowDataAction =  () => async dispatch => {
     try {
         dispatch({type: GET_DATA_REQUEST})
         const {data} =  await axios.get(`http://localhost:5000/task`)
         dispatch({type: GET_DATA_SUCCESS, payload: data.result})
     } catch (error) {
         dispatch({type: GET_DATA_FAIL, payload:error.message})    
     }
 }

 export const RemoveDataAction =  (taskId) => async dispatch => {
     try {
         dispatch({type : DELETE_DATA_REQUEST})
         const {data} =  await axios.delete(`http://localhost:5000/task/remove/${taskId}`)
         dispatch({type : DELETE_DATA_SUCCESS, payload:data.result})
     } catch (error) {
         dispatch({type : DELETE_DATA_FAIL, payload: error.message})     
     }
 }

  export const UpdateDataAction = editTask => async dispatch => {
      try {
          dispatch({type : UPDATE_DATA_REQUEST})
          const {data} =  await axios.put(`http://localhost:5000/task/${editTask._id}`, editTask)
          console.log(data);
          dispatch({type : UPDATE_DATA_SUCCESS, payload:data.result})
      } catch (error) {
          dispatch({type : UPDATE_DATA_FAIL, payload: error.message})       
      }
  }