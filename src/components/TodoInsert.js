import { useState } from "react";

const TodoInsert = ({onInsert}) => {
  const [value,setValue] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    onInsert(value);
  }
  const handleInput = (event) => {
    setValue(event.target.value);
  }
  return (
    <div>
      <form className="todo-insert" onSubmit={handleSubmit}>
        <input type="text" placeholder="할 일을 입력하세요" onChange={handleInput}/>
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default TodoInsert;