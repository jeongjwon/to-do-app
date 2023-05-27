import styled from "styled-components";

export const InsertForm = styled.form`
   

`;
export const FormWrapper = styled.div`
     align-items: center;
    justify-content: center;
    display: flex;

   
> input{
        background: none;
    outline: none;
    border: none;
    background-color: #adb5bd;
    width: 100%;
    /* padding: 0.7rem; */
    padding: 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
        ::placeholder{
            color: #dee2e6;
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

    > button{
        height: 3rem;
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
    background: gray;
    color: white;
    padding: 0 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s background ease-in;
        :hover{
            background: #adb5bd;
        }
    }
`