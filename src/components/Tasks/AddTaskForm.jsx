import React , { useState } from 'react'
import axios from 'axios'

import addSvg from '../../assets/add.svg'

const AddTaskForm = ({ list, onAddTask }) => {
const [inputValue, setInputValue] = useState('');
const [isLoading, setIsLoading] =useState('');

const toggleForm = () => {
    setInputValue('');
};

const addTask = () => {
    const obj={
        listId: list.id,
        text: inputValue,
        completed: false
      };
    setIsLoading(true);
          axios.post('https://my-project-matss.herokuapp.com/tasks/', obj).then(({ data }) =>{
            
              onAddTask(list.id,data);
             toggleForm();
          })
          .catch(() => {
              alert('Error adding task');
          })
          .finally ( () => {
            setIsLoading(false);
          });

        
}

    return (
        <div className="tasks__form">
          <img src={addSvg} alt="Add icon"/>
         <input value={inputValue} valuetype="text" className="field" placeholder="Start typing here to create a task..." onChange={e => setInputValue(e.target.value)}/>
                
                <button  onClick={addTask} className="button">
                  {isLoading ? 'Додавання' : 'Add Task'}
                    </button> 
      </div>
    );
}

export default  AddTaskForm;