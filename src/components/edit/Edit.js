import { useCallback, useEffect, useState } from "react";
import {EditBackground, EditForm } from './Edit.styled.js';

const Edit = ({ onUpdate, selectedToDo })  => {
    
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
        <EditBackground>
          <EditForm onSubmit={onSubmit}>
                <h2> 수정하기 </h2>
                <input
                    value={value}
                    onChange={onChange}
                    placeholder='할일을 수정하세요' />
                <button type="submit">수정하기</button>
            </EditForm>
        </EditBackground>
    )
}


export default Edit;