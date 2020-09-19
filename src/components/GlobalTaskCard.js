import React from "react"
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteGlobalTask } from "../store/global_task/actions";

const GlobalTaskCard = ({ id,global_taskId, title, description }) => {
    const dispatch = useDispatch();

    return (
        <div className="global_taskKard">
            {id}
            {global_taskId}
            <h4>
                <NavLink to={`tasks/list/` + global_taskId}>
                    {title}
                </NavLink>
            </h4>
            <div>
                <p>{description}</p>
                {/* <span>Progress</span>00% */}
                <button onClick={() => { dispatch(deleteGlobalTask(id,global_taskId)) }} className="btn btn-danger global_task-delete" >&times;</button>
                <button className="btn btn-warning">Edit</button>
                {/* <button onClick={() => { dispatch(deleteGlobalTask(id,global_taskId)) }} className="btn btn-danger global_task-delete" >&times;</button> */}

            </div>
        </div>
    )

}

export default GlobalTaskCard