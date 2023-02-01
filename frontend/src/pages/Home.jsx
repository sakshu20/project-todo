import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveDataAction, ShowDataAction, UpdateDataAction } from '../redux/actions/taskAction'

export default function Home() {
  const {datashow,  taskRomove ,TaskUpdate } =  useSelector(state  => state.allTask)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ShowDataAction())
  }, [ taskRomove  , TaskUpdate ])

  const [editTask, setEditTask] = useState({
    task:"",
    PhoneNo:"",
    })

    const [deleteId, setDeleteId] = useState()

  const handleupdate = () => {
  dispatch(UpdateDataAction(editTask))
   }

 const handleDelete = (taskId) => {
dispatch(RemoveDataAction(taskId))
  }

  
  return <>
  {/* {JSON.stringify(datashow)} */}
  <h1>Home page</h1>
              {/* <!-- output start --> */}
              <div className="container">
                <div className="row">
{
  datashow && datashow.map((item,i)=>
    <div key={item.id} className="col-sm-4">
      <div className="card mt-4">
               <div
                className="card-header justify-content-between"
                data-bs-toggle="collapse"
                data-bs-target="#task1"
              > 
                Name :  {item.task}
                <div>
                  </div>
                  <h6>Phone no : {item.PhoneNo}</h6>
                  <div className="d-flex gap-2">

                  <button
                    type="button"
                    className="btn btn-sm btn-warning"
                    data-bs-target="#editModal"
                    data-bs-toggle="modal"
                    onClick={ e => setEditTask(item)}
                    >
                    edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    data-bs-target="#deleteModal"
                    data-bs-toggle="modal"
                    onClick={e => setDeleteId(item._id)}
                    >
                    delete
                  </button>
                    </div>
                </div>

            </div>
            </div>
)
}
                                
                </div>
              </div>
            {/* <!-- output end--> */}


                  {/* <!-- edit Modal --> */}
                  {/* {JSON.stringify(editTask)} */}
      <div className="modal fade" id="editModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModal">Edit Task</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <label htmlFor="mtask" className="form-label">task</label>
                <input
                  type="text"
                  className="form-control"
                  id="mtask"
                  placeholder="Enter Your task"
                  value={editTask.task}
                  onChange={e => setEditTask({ ...editTask, task: e.target.value})}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="mdesc" className="form-label">Phone no</label>
                <input
                  type="number"
                  className="form-control"
                  id="mdesc"
                  placeholder="Enter task Phone no"
                  value={editTask.PhoneNo}
                  onChange={e => setEditTask({ ...editTask, PhoneNo: e.target.value})}
/>
              </div>
             
              <button type="submit" className="btn btn-primary w-100 mt-3"  data-bs-dismiss="modal" onClick={handleupdate}>
                Update Task</button>

              <button
                type="button"
                className="btn mt-2 w-100 btn-outline-secondary"
                data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div> 


            {/* <!-- Delete Modal --> */}
        <div className="modal fade" id="deleteModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger">
                Are you sure you want delete this todo ?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-danger">
              <p className="text-center text-muted mb-5">
                You can delete this todo at any time. If you change your mind, you
                might not be able to recover it
              </p>
              <div className="btn-group w-100">
                <button type="button"  data-bs-dismiss="modal" className="btn btn-outline-danger" onClick={e => handleDelete(deleteId)}>Yes</button>
                <button type="button"  data-bs-dismiss="modal" className="btn btn-success">NO</button>
              </div>
            </div>
          </div>
        </div>
      </div>  
  </>
}
