import React from "react";
import './TodoItem.css';
import iconBmw from './bmw.png';

function TodoItem(props) {

    return (
        <li className="todoItem">

            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
            <img src={iconBmw} alt="logo" onClick={props.onComplete}></img>
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>

            <span className="Icon Icon-delete" onClick={props.onDelete}>
            X
            </span>
        </li>
    );
}

export { TodoItem };