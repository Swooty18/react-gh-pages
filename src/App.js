import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom' 

import { List, AddList, Tasks } from "./components";



function App() { 
  
  const [lists,setLists] = useState(null);
  const [activeItem,setActiveItem] = useState(null);
  let history = useHistory();

useEffect(() => {
  axios
  .get('https://my-project-matss.herokuapp.com/lists?_embed=tasks')
  .then(({ data }) =>{
    setLists(data);
      })
},
[]);

  const onAddList = obj =>{
    const newList = [
      ...lists,
      obj 
    ];
    setLists(newList);
  };

  const onAddTask = (listId ,taskObj) =>{
    const newList = lists.map(item =>{
      if(item.id ===listId) {
        item.tasks = [...item.tasks, taskObj];
      }
      return item; 
    });
    setLists(newList);
  };

  const onEditTask = (listId,taskId,taskText) => {
    const newTaskText = window.prompt('Task text', taskText);
     
    if(!newTaskText) {
      return;
    }

    const newList = lists.map(item => {
        if(item.id === listId){
          item.tasks = item.tasks.map(task => {
            if (task.id === taskId) {
              task.text = newTaskText;
            }
            return task;
          } );
        }
        return item;
      });
      setLists(newList);
      axios.patch('https://my-project-matss.herokuapp.com/tasks/' + taskId, {text: newTaskText}).then (console.log(taskId))
    .catch(() => {
        alert('Failed to update task');
      });
  
  }


  const onRemoveTask = (listId,taskId) => {
    if (window.confirm('You really want to delete the task?')){
      const newList = lists.map(item => {
        if(item.id === listId){
          item.tasks = item.tasks.filter(task => task.id !==taskId );
        }
        return item;
      });
      setLists(newList);
      axios.delete('https://my-project-matss.herokuapp.com/tasks/' + taskId) 
    .catch(() => {
        alert('Failed to delete task');
      });
  }
};

  const onCompleteTask = (listId,taskId,completed) =>{

    const newList = lists.map(item => {
        if(item.id === listId){
          item.tasks = item.tasks.map(task => {
            if (task.id === taskId) {
              task.completed = completed;
            }
            return task;
          } );
        }
        return item;
      });
      setLists(newList);
      axios.patch('https://my-project-matss.herokuapp.com/tasks/' + taskId, {completed}) 
    .catch(() => {
        alert('Failed to update task');
      });
  }

  const onEditListTitle =(id,title) =>{
    const newList = lists.map(item => {
      if(item.id === id) {
        item.name = title;
      }
      return item;
    });
    setLists(newList);
  }

  useEffect(() => {
    const listId = history.location.pathname.split('lists/')[1];
    if (lists) {
      const list = lists.find(list =>list.id === Number(listId));
    setActiveItem( list);
    }
  },[lists, history.location.pathname])


    return <div className="todo">
    <div className="todo__sidebar">
      
      <List 
        onClickItem={list => {
          history.push(`/`);
          setActiveItem();
        }}
      items={[
        {
          active: history.location.pathname === '/',
          icon: <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467 M17.377,15.123c0,0.453-0.366,0.819-0.82,0.819H3.442c-0.453,0-0.82-0.366-0.82-0.819V8.976h14.754V15.123z M17.377,8.156H2.623V6.106c0-0.453,0.367-0.82,0.82-0.82h1.639v1.23c0,0.225,0.184,0.41,0.41,0.41c0.225,0,0.41-0.185,0.41-0.41v-1.23h8.196v1.23c0,0.225,0.185,0.41,0.41,0.41c0.227,0,0.409-0.185,0.409-0.41v-1.23h1.64c0.454,0,0.82,0.367,0.82,0.82V8.156z"></path>
        </svg>,
          name: 'All tasks',
          
        },
      ]}
      
       />
       {lists ? (
       <List 
      items={lists}
      onRemove={(id) => {
        const newLists = lists.filter(item => item.id !== id);
        setLists(newLists);
      }}
      onClickItem={list => {
        history.push(`/lists/${list.id}`);
      }}
      activeItem={activeItem}
      isRemovable
       />
       ):(
         'Loading...'
       )}
       <AddList  onAdd={onAddList} />
    </div>
    <div className="todo__tasks">
      <Route exact path="/">
        {lists && lists.map(list =>(
                <Tasks 
                key={list.id}
                list={list} 
                onAddTask={onAddTask} 
                onEditTitle={onEditListTitle} 
                onRemoveTask={onRemoveTask} 
                onEditTask={onEditTask} 
                onCompleteTask={onCompleteTask}
                withoutEmpty
                />
         ) )
        }
      </Route>
      <Route exact path="/lists/:id">
              {lists && activeItem && <Tasks list={activeItem} onAddTask={onAddTask} onEditTitle={onEditListTitle} onRemoveTask={onRemoveTask} onEditTask={onEditTask} onCompleteTask={onCompleteTask}/>}

      </Route>
    </div>
  </div>
}

export default App;
