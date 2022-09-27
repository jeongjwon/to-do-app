import {MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox, MdModeEditOutline} from 'react-icons/md';
import cn from 'classnames';
import './ToDoListItem.css';

function ToDoListItem(
    {todo, onRemove, onToggle, onChangeSelectedToDo, onInsertToggle}
) {
    const {id, text, checked} = todo;
    return (
        <div className="ToDoListItem-virtualized">
            <li className="ToDoListItem">
                <div className={cn('checkbox', { checked })}
                    onClick={() => {
                        onToggle(id);

                    }}>
                    {
                        checked
                            ? <MdCheckBox/>
                            : <MdCheckBoxOutlineBlank/>
                    }
                
                <div className="text">{text}</div>
                </div>
                <div
                    className="edit"
                    onClick={() => {
                        onChangeSelectedToDo(todo);
                        onInsertToggle();
                    }}>
                    <MdModeEditOutline/>
                </div>
                <div className="remove" onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline/>
                </div>
            </li>
        </div>
    )
}
export default ToDoListItem;