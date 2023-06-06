import { useCallback, useEffect, useState } from "react";
import { EditBackground, EditForm } from "./Edit.styled.js";
import { CheckIcon } from "@heroicons/react/24/solid";

const Edit = ({ editedTask, onUpdate, selectedToDo, setIsEditing }) => {
  const [value, setValue] = useState("");

  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  const onChangeInput = useCallback(
    (e) => {
      setUpdatedTaskName(e.target.value);
    },
    [updatedTaskName]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // onUpdate({ selectedToDo.id, value });
      onUpdate({ ...editedTask, name: updatedTaskName });
      setUpdatedTaskName("");
    },
    [onUpdate, updatedTaskName]
  );

  useEffect(() => {
    if (selectedToDo) {
      setValue(selectedToDo.text);
    }
  }, [selectedToDo]);

  return (
    <EditBackground>
      <EditForm onSubmit={onSubmit}>
        <div className="wrapper">
          <input
            value={updatedTaskName}
            onChange={(e) => onChangeInput(e)}
            placeholder="할일을 수정하세요"
            required
          />
          <label htmlFor="editNote" className="label">
            Update TODO
          </label>
        </div>

        <button type="submit">
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </EditForm>
    </EditBackground>
  );
};

export default Edit;
