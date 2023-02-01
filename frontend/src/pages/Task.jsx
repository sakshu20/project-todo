import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { TaskDataAction } from '../redux/actions/taskAction';

export default function Task() {

    const [taskData, setTaskData] = useState({
        task:"Blog 1",
        PhoneNo:"9876545465"
    })
    const dispatch = useDispatch()

    const handleTaskData = () => {
    dispatch(TaskDataAction(taskData))
    }

  return <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="card">
              <div className="card-header">Task</div>
              <div className="card-body">

                <div>
                  <label htmlFor="task" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="task"
                    placeholder="Enter Your task"
                    value={taskData.task}
                    onChange={e => setTaskData({ ...taskData, task:e.target.value})}
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="desc" className="form-label">Phone no.</label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    placeholder="Enter Phone No."
                    value={taskData.PhoneNo}
                    onChange={e => setTaskData({ ...taskData, PhoneNo:e.target.value})}
                  />
                </div>
               
                <button type="button" className="btn btn-primary w-100 mt-3" onClick={handleTaskData}>
                  Add Task
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
  </>
}
