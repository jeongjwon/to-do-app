import { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import { InsertForm, FormWrapper } from "./Insert.styled.js";

const Insert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const hanldeSumbit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert({
        name: value,
        checked: false,
        id: Date.now(),
      });
      setValue('');
    },
    [onInsert, value]
  );

  return (
    <InsertForm onSubmit={hanldeSumbit}>
      <FormWrapper>
        <input
          value={value}
          onChange={onChange}
          placeholder="Type to add a note..."
        />
        {/* <label htmlFor="task" className="label">Enter to do </label> */}
        <button type="submit">
          <MdAdd />
        </button>
      </FormWrapper>
    </InsertForm>
  );
};
export default Insert;
