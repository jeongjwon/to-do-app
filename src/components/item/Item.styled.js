import styled from "styled-components";

export const ItemWrapper = styled.div`
  border-top: 1px solid #dee2e6;
  border-radius: 1rem;
  /* :nth-child(even) {
    background-color: #f8f9fa;
  } */
  background-color: #63a1d1;
  padding: 1rem 1rem;
  margin-bottom: 0.5rem;
  /* :nth-child(2) {
    background-color: #ebf0f4;
  } */
`;
export const ItemContainer = styled.li`
  /* margin: 0.5rem 0;
  padding: 0.55rem 1rem; */
  display: flex;

  align-items: flex-end;
  color: black;

  :nth-child(2) {
    display: flex;
    color: white;
    padding-top: 0.5rem;
    justify-content: space-between;
    > .date {
      font-size: 0.8rem;
    }
    > .button {
      display: flex;
      > .edit {
        margin-right: 1rem;
        display: flex;
        font-size: 1.3rem;
        cursor: pointer;
        color: white;
        &:hover {
          color: #adb5bd;
        }
      }
      .remove {
        display: flex;
        font-size: 1.3rem;
        cursor: pointer;
        color: white;
        &:hover {
          color: #ff7f5f;
        }
      }
    }
  }
  .text {
    margin-left: 0.5rem;
  }
  > .checkbox {
    align-items: center;
    cursor: pointer;
    /* padding: 0 1rem; */
    display: flex;
    flex: 1 1;
  }
  > .checkbox.checked {
    > svg {
      display: flex;
      align-items: center;
      color: white;
    }
  }
  > .checkbox svg {
    align-items: center;
    color: white;
    font-size: 1.5rem;
  }
  > .checkbox.checked .text {
    color: white;
    text-decoration: line-through;
  }
`;
