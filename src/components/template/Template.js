import {
  TemplateContainer,
  TemplateTitle,
  TemplateDate,
  TemplateContent,
} from "./Template.styled.js";
import { useState, useCallback, useRef } from "react";
import useLocalStorage from "../../hooks/useLocalStorage.js";

import Insert from "../insert/Insert.js";
import Edit from "../edit/Edit.js";
import List from "../list/List.js";

const Template = ({ children }) => {
  const date = new Date();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "리액트 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 하기",
      checked: true,
    },
    {
      id: 3,
      text: "투두리스트 만들기",
      checked: false,
    },
  ]);
  const [selectedToDo, setSelectedToDo] = useState(null);
  //선택되는 todo
  const [insertToggle, setInsertToggle] = useState(false);
  // true인 경우 ToDoEdit 팝업창 오픈

  const nextId = useRef(4);

  // const onInsert = useCallback((text) => {
  //     const todo = { // {id, text, checked}
  //         id: nextId.current,
  //         text,
  //         checked: false
  //     };
  //     setTasks((tasks) => tasks.concat(todo)); //주어진 배열의 기존 값에 합져져 새 배열 반환
  //     nextId.current++;
  // }, [tasks],);
  //tasks 가 바뀔때마다 todo가 새롭게 만들어지고 tasks에 추가됨
  const onInsert = (task) => {
    setTasks((prev) => [...prev, task]);
  };
  const onToggle = useCallback((id) => {
    setTasks((tasks) =>
      tasks.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo
      )
    );
  });

  const onInsertToggle = useCallback(() => {
    //ToDoListItem 의 수정하기 + ToDoEdit의 수정하기 버튼
    if (selectedToDo) {
      //항목이 선택되어 있다면 selectedToDo 를 null로 변경
      setSelectedToDo((selectedToDo) => null);
    }
    setInsertToggle((prev) => !prev);
  });

  const onRemove = useCallback((id) => {
    setTasks((tasks) => tasks.filter((todo) => todo.id !== id));
  }, []); //todo 중 todo.id가 인자로 받아온 id와 일치하지 않는 원소만 추출하여 새로운 배열을 만듦

  const onUpdate = useCallback((id, text) => {
    onInsertToggle(); //팝업창 꺼줌
    setTasks(
      tasks > tasks.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  }, []);

  const onChangeSelectedToDo = (todo) => {
    setSelectedToDo((selectedToDo) => todo);
    //selected 를 변경할 경우 selectedTodo에 저장
  };

  return (
    <TemplateContainer>
      <h1>Your Note</h1>
      {/* <TemplateDate>
                {date.getFullYear()} . {date.getMonth()} . {date.getDay()}
            </TemplateDate> */}
      {/* <TemplateContent>{children}</TemplateContent> */}

      <Insert onInsert={onInsert} />

      {tasks && <List
        tasks={tasks}
        onToggle={onToggle}
        onRemove={onRemove}
        onInsertToggle={onInsertToggle}
        onChangeSelectedToDo={onChangeSelectedToDo}
      />}
      
      {insertToggle && (
        <Edit
          onInsert={onInsert}
          selectedTodo={selectedToDo}
          onInsertToggle={onInsertToggle}
          onUpdate={onUpdate}
          insertToggle={insertToggle}
        />
      )}
    </TemplateContainer>
  );
};

export default Template;