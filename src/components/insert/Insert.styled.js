import styled from "styled-components";

export const InsertForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin: 2rem 0;
`;
export const FormWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1 1 100%;
  gap: 0.2rem;
  position: relative;

  > input {
    width: 100%;
    border-radius: 0.2rem;
    background: none;
    outline: none;
    border: none;
    /* background-color: #adb5bd; */
    background-color: #ebf0f4;
    width: 100%;
    padding: 0.8em 0.6em;
    font-size: 1rem;
    ::placeholder {
      /* color: #dee2e6; */
      color: black;
    }
  }
  > label {
    text-transform: uppercase;
    font-size: 0.7em;
    pointer-events: none;
    letter-spacing: 0.05em;
    margin-inline: 0.45em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.15em 0.35em;
    background-color: hsl(var(--bg));
    /* background-color: hsl(var(--muted)); */
    transition: transform var(--_tspeed_fast) var(--_ttype_squish),
      background-color var(--_tspeed_fast) var(--_ttype_squish);
  }
`;

export const PlusBtn = styled.button`
  max-width: fit-content;
  padding: 0.5em;
  gap: 0.5rem;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  background: #3989c6;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s background ease-in;
  border-radius: 0.2rem;
  > svg {
    background: ;
  }
  :hover {
    background: #adb5bd;
  }
`;
