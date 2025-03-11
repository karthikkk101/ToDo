import React, { useState } from 'react';

function Task({ task, deleteTask, updateTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleUpdate = () => {
        updateTask({ ...task, text: newText });
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span>{task.text}</span>
            )}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            {isEditing ? (
                <button onClick={handleUpdate}>Update</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </li>
    );
}

export default Task;