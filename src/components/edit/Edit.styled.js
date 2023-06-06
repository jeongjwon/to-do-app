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
  padding: 2rem 1.3em 1.3em;
  border-radius: 0.5rem;
  background-color: white;
  justify-content: center;

  /* flex-direction: column; */
  > .wrapper {
    flex: 1 1 100%;
    position: relative;
    display: grid;
    


    > input {
      /* margin: 1rem; */
      z-index: 100;
      outline: none;
      border: none;
      border-radius: 0.5rem;
      padding: 5rem 0.55em;
      width: 100%;
      padding: 0.3rem;
      background-color: rgb(235, 240, 244);
      transition: box-shadow var(180ms) var(cubic-bezier(0.86, -0.1, 0.27, 1.15));
      
      ::placeholder{
        opacity: 0;
      }
      :focus{
        outline: none;
        box-shadow: 0 0 0 0.2em #63a1d1, 0 0 0 0.3em #63a1d1;
      }
      :focus ~ .label,
      :not(:placeholder-shown) ~ .label {
        transform: translate3d(0, -3.5em, 0);
        /* background-color: white; */
        color: #63a1d1;
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
      background: white;
      z-index:
      transition: transform var(180ms) var(cubic-bezier(0.86, -0.1, 0.27, 1.15)),
        background-color var(180ms) var(cubic-bezier(0.86, -0.1, 0.27, 1.15));
    }
  }

  

  > button {
    cursor: pointer;
    /* background-color: #1d3a58; */
    background-color: #63a1d1;
    border: none;
    border-radius: 0.3rem;
    color: white;
    padding: 0.5rem;
    margin-left: 1rem;
    /* margin-bottom: 1rem; */
  }
`;
