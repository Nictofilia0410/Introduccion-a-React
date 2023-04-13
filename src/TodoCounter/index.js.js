import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter () {
    const { totalTodos, completedTodos } = React.useContext(TodoContext) ; 
    
    return (
        <div className="todoCounter">
            <h2>Get Your Sheet Done  {completedTodos} of {totalTodos}</h2>
        </div>
    );
}

export { TodoCounter };