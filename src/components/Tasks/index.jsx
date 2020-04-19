import React from 'react'
import axios from 'axios'

import editSvg from '../../assets/edit.svg'


import './Tasks.scss';

import AddTaskForm from './AddTaskForm.jsx'
import Task from './Task.jsx'

const Tasks = ({ list, onEditTitle, onAddTask, onCompleteTask, onRemoveTask,onEditTask, withoutEmpty }) => {

  const editTitle = () =>{
    const newTitle = window.prompt('Назва списку',list.name)
    if (newTitle) {
      onEditTitle(list.id, newTitle);
      axios.patch('http://localhost:3001/react-gh-pages/lists/' + list.id, {
        name: newTitle
      }).catch(() => {
        alert('Не вдалося обновити назву списку');
      });
    }
  };
  

  

    return (
        
      <div className="tasks">
        <div className="tasks__title">
            <span>{list.name}</span>
            <img onClick={editTitle} src={editSvg} alt="Edit-icon"/>
        </div>
       <AddTaskForm list={list} onAddTask={onAddTask}/>
        {!withoutEmpty && list.tasks && !list.tasks.length && <h2>Задач немає!</h2>}
        {
          list.tasks && list.tasks.map((task) => 
            <Task key={task.id} 
            onRemoveTask={onRemoveTask} 
            list={list}
            onEditTask={onEditTask}
            onCompleteTask={onCompleteTask}
            {...task} />
        )
        }
        
      </div>
    
    );
}




export default  Tasks;
