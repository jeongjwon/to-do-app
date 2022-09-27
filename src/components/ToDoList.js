import { useCallback } from "react";
import ToDoListItem from "./ToDoListItem";
// import { List } from 'react-virtualized';
import './ToDoList.css';
function ToDoList({todos, onRemove, onToggle, onChangeSelectedToDo, onInsertToggle}) {
    
    // const rowRender = useCallback(
    //     ({ index, key, style }) => {
    //         const todo = todos[index];
    //         return (
    //             <ToDoListItem
    //                 todo={todo}
    //                 key={key}
    //                 onRemove={onRemove}
    //                 onToggle={onToggle}
    //                 onChangeSelectedToDo={onChangeSelectedToDo}
    //                 onInsertToggle={onInsertToggle}
                   
    //             />

    //         )
    //     },
    //     [todos, onRemove, onToggle, onChangeSelectedToDo, onInsertToggle],
    // );
    // return (
    //     <List
    //         className="ToDoList"
    //         width={512}
    //         height={513}
    //         rowCount={todos.length}
    //         rowHeight={57}
    //         rowRenderer={rowRender}
    //         list={todos}

    //     />
    // )
    return (
        <ul className="ToDoList">
            {todos.map((todo) => (
                <ToDoListItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    onChangeSelectedToDo={onChangeSelectedToDo}
                    onInsertToggle={onInsertToggle}
                   
                />
            ))}
            

        </ul>
               
            )
}
export default ToDoList;