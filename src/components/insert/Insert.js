import { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import { InsertForm, FormWrapper, PlusBtn } from "./Insert.styled.js";

const Insert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const today = new Date();

  const hanldeSumbit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert({
        name: value,
        checked: false,
        id: Date.now(),
        date: today.toLocaleDateString(),
      });
      setValue("");
    },
    [onInsert, value]
  );

  return (
    <InsertForm onSubmit={hanldeSumbit}>
      <FormWrapper>
        <input
          value={value}
          onChange={onChange}
          placeholder="Enter TODO"
          required
        />
        {/* <label htmlFor="task" className="label">
          ENTER to do...
        </label> */}
      </FormWrapper>
      <PlusBtn type="submit">
        <MdAdd />
      </PlusBtn>
    </InsertForm>
  );
};
export default Insert;
