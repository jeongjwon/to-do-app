import { useCallback, useState } from "react";
import { MdAdd } from 'react-icons/md';
import './ToDoInsert.css';

function ToDoInsert({ onInsert }) {

    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        //input 입력값을 제출했을 때
        //toDos 배열에 value를 insert하여 toDos 배열에 추가
        //input 초기화
        onInsert(value);
        setValue('');
        e.preventDefault();
    },
        [onInsert, value],
    );
    
    return (
        <form className="ToDoInsert" onSubmit={onSubmit}>
            <input
                value={value}
                onChange={onChange}
                placeholder="할 일을 입력하세요"
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
   ) 
}
export default ToDoInsert;