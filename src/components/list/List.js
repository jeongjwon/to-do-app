import { useCallback } from "react";
import Item from "../item/Item";
import {ListContainer} from './List.styled.js';

const  List = ({tasks, onRemove, onToggle, onChangeSelectedToDo, onInsertToggle}) => {
    return (
        <ListContainer>
            {tasks.sort((a,b) => a.id - b.id)
                .map((task) => (
                <Item
                    task={task}
                    key={task.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    onChangeSelectedToDo={onChangeSelectedToDo}
                    onInsertToggle={onInsertToggle}
                   
                />
            ))}
            

            </ListContainer>
               
            )
}
export default List;