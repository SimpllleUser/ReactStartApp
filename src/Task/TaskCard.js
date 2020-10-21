import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Options from "../components/Options";
import Modal from "../Modals/Modal";
import TaskForm from "./TaskForm";
import { deleteTaskInGlobal_task } from "../store/tasks/actions";
import SelectorElement from "../components/SelectorElement";

const TaskCard = ({ global_taskId, task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task-card card">
      <div className="card-body">
        <div className="card-detail-info">
          <h5 className="card-title ">
            <NavLink to={`/detail-task/${task.id}`}>{task.title}</NavLink>
          </h5>
          <div className="options">
            <SelectorElement name={task.status} type="status" />
            <SelectorElement name={task.type} type="type" />
            <SelectorElement name={task.priority} type="priority" />
          </div>
        </div>
      </div>
      <Modal
        forElement={"edit-task" + task.id}
        title="Edit task"
        component={
          <TaskForm
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            type={task.type}
            priority={task.priority}
          />
        }
      />
      {global_taskId && (
        <div>
          <Options
            items={[
              <div>
                <div
                  className="list-group-item list-group-item-action bg-warning text-dark"
                  data-toggle="modal"
                  data-target={"#edit-task" + task.id}
                >
                  Edit
                </div>
                <div
                  className="list-group-item list-group-item-action bg-danger text-white"
                  onClick={() => {
                    dispatch(
                      deleteTaskInGlobal_task({
                        id: global_taskId,
                        taskId: task.id,
                      })
                    );
                  }}
                >
                  Delete
                </div>
              </div>,
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default TaskCard;
