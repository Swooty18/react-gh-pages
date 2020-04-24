import React, { useState } from 'react'
import axios from 'axios'

import List from '../List'


import closeSvg from '../../assets/close.svg'

import './AddList.scss'


const AddButtonList =  ({ onAdd })  => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const onClose = () =>{
        setVisiblePopup(false);
        setInputValue(''); 
    }

    const addList = () => {
        if(!inputValue){
            alert('Enter a name for the list');
            return;
        }
        setIsLoading(true);
        axios.post('https://my-project-matss.herokuapp.com/lists',{ name: inputValue})
        .then(({ data }) => {
            onAdd(data);  
            onClose();  
        })
        .catch(() => {
            alert('Error adding list');
        })
        .finally(() => {
            setIsLoading(false);
        });
        
          
    };
    return (
        <div className="add-list" >
            <List
            onClick={() => setVisiblePopup(!visiblePopup)}
            items={[
                {
                    className: 'list__add-button',
                    icon: <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>,
                    name: 'Додати список'
                },

            ]}
        />
            {
                visiblePopup && <div className="add-list__popup">
                    <img 
                    onClick={onClose}
                    src={closeSvg} alt="Close-button" className="add-list__popup-close-btn"></img>
                <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" className="field" placeholder="List name"/>
                
                <button onClick={addList} className="button">
                    {isLoading ?  'Adding...' : 'Add'}
                    </button>                
            </div>
            }
        </div>
    );
};

export default AddButtonList;