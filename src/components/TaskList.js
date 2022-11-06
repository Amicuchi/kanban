import React from 'react';
import PropTypes from "prop-types";
import './TaskList.css';
import TaskItem from './taskItem';
import plusIcon from '../img/plus.svg'

export default function TaskList( { 
        title, 
        onAddTask, 
        tasks, 
        taskState, 
        onTaskUpdate, 
        onDeleteTask
}){
    
    const addTask = () => {
        onAddTask("Nova Tarefa", taskState);
    }

    return(
        <div className='taskList'>
            <div className='title'>{title}</div>
            <div className="content">
                {tasks.map((task) => {
                    return (
                        <TaskItem 
                            key={task.id} 
                            id={task.id} 
                            title={task.title} 
                            taskState={task.state} 
                            onTaskUpdate={onTaskUpdate} 
                            onDeleteTask={onDeleteTask} 
                        />
                    )
                })}
            {tasks.length === 0 && <div className='empty-list'>Lista Vazia</div>}
            </div>

            <button onClick={addTask} className="btn" >
                <img src={plusIcon} alt="Adicionar"/>
                Adicionar Tarefa
            </button>
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}