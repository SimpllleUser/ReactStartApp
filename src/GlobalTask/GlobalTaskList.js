import React from "react";
import {useSelector } from "react-redux";
import GlobalTaskCard from "../GlobalTask/GlobalTaskCard"

const GlobalTaskList = () => {
    const id = JSON.parse(localStorage.getItem('project')).id
    const global_tasks = useSelector((state) => state.global_tasks.global_tasks);
    const global_tasksList = global_tasks?.map((global_task, index) => (
        <li key={index} className="list-group-item">
            <GlobalTaskCard id={id} global_taskId={global_task.id} title={global_task.title} description={global_task.description} />
        </li>
      ));
    return(
        <div id="global_task-list">
            <h1>GlobalTask List</h1>
            <div>
                {global_tasksList}
            </div>
        </div>
    )
}

export default GlobalTaskList