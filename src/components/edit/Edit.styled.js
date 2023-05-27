import styled from "styled-components";

export const EditBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.548);
`;

export const EditForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 300px;

  background-color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h2 {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 1rem;
    text-align: center;
    color: white;
    background-color: #1d3a58;
  }
  > input {
    margin: 1rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #1d3a58;
    padding: 0.3rem;
  }
  > button {
    cursor: pointer;
    background-color: #1d3a58;
    color: white;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
  }
`;
