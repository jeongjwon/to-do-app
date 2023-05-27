import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
  MdModeEditOutline,
} from "react-icons/md";
import cn from "classnames";
import {ItemContainer, ItemWrapper} from "./Item.styled";

const Item = ({
  task,
  onRemove,
  onToggle,
  onChangeSelectedToDo,
  onInsertToggle,
}) => {
  const { id, text, checked } = task;
  return (
    <ItemWrapper>
      <ItemContainer>
        <div
          className={cn("checkbox", { checked })}
          onClick={() => {
            onToggle(id);
          }}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

          <div className="text">{text}</div>
        </div>
        <div
          className="edit"
          onClick={() => {
            onChangeSelectedToDo(task);
            onInsertToggle();
          }}
        >
          <MdModeEditOutline />
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </ItemContainer>
    </ItemWrapper>
  );
};
export default Item;
