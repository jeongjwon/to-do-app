import styled from "styled-components";

export const ItemWrapper = styled.div`
  border-top: 1px solid #dee2e6;
  :nth-child(even) {
    background-color: #f8f9fa;
  }
`;
export const ItemContainer = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
  color: black;

  > .checkbox {
    align-items: center;
    cursor: pointer;
    padding: 0 1rem;
    display: flex;
    flex: 1 1;

    > text {
      margin-left: 1rem;
    }
  }
  > .checkbox.checked {
    > svg {
    color: #cbc462;
  }
  > text{
    margin-left: 1rem;
  }
}
  > .checkbox svg {
    color: gray;
    font-size: 1.5rem;
  }
  > .checkbox.checked .text {
    color: #adb5bd;
    text-decoration: line-through;
  }
  > .edit {
    margin-right: 1rem;
    display: flex;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover{
        color: #adb5bd;
    }
  }
  .remove{
    display: flex;
    font-size: 1.5rem;
    cursor: pointer;
    color: red;
    &:hover{
        color: #ff7f5f;
    }
  }
`;
