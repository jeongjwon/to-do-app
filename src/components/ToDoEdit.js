import { useCallback, useEffect, useState } from "react";
import './ToDoEdit.css';

function ToDoEdit({ onUpdate, selectedToDo }) {
    
    const [value, setValue] = useState('');
    
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    
    const onSubmit = useCallback((e) => {
        onUpdate(selectedToDo.id, value);
        setValue('');
        e.preventDefault();
    },
        [onUpdate, value]
    );

    useEffect(() => {
        if (selectedToDo) {
            setValue(selectedToDo.text);
        }
        
    }, [selectedToDo]);
    return (
        <div className="background">
            <form className="ToDoEdit_insert" onSubmit={onSubmit}>
                <h2> 수정하기 </h2>
                <input
                    value={value}
                    onChange={onChange}
                    placeholder='할일을 수정하세요' />
                <button type="submit">수정하기</button>
            </form>
        </div>
    )
}


export default ToDoEdit;