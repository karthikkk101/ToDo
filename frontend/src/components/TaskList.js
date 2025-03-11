import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask, updateTask }) {
    return (
        <ul>
            {tasks.map(task => (
                <Task key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
            ))}
        </ul>
    );
}

export default TaskList;