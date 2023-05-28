import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
  MdModeEditOutline,
} from "react-icons/md";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";

import cn from "classnames";
import { ItemContainer, ItemWrapper } from "./Item.styled";

const Item = ({
  task,
  onRemove,
  onToggle,
  onChangeSelectedToDo,
  onInsertToggle,
}) => {
  const { name, checked, id, date } = task;

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

          <div className="text">{name}</div>
        </div>
      </ItemContainer>
      <ItemContainer>
        <div className="date">{date} </div>
        <div className="button">
          <div
            className="edit"
            onClick={() => {
              onChangeSelectedToDo(task);
              onInsertToggle();
            }}
          >
            <HiOutlinePencilAlt />
          </div>
          <div className="remove" onClick={() => onRemove(id)}>
            <HiOutlineTrash />
          </div>
        </div>
      </ItemContainer>
    </ItemWrapper>
  );
};
export default Item;
