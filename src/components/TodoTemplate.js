
const TodoTemplate = ({children}) => {
  return (
    <div className="todo-template">
      <h1>일정 관리</h1>
      {/* <p>Todo App을 만들자!</p> */}
      <div>{children}</div>
    </div>
  );
};

export default TodoTemplate;