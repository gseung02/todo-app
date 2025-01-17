import { useEffect, useState } from 'react';
import './App.scss';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from "./components/TodoTemplate";
import TodoList from './components/TodoList';

const App = () => {
  //id(length+1), text, checked(false)
  const [todos,setTodos] = useState(()=>{
    //초기값
    const load = localStorage.getItem('todos');
    return load ? JSON.parse(load) : [];
  });
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]); //[]일 경우 초기 실행, 값이 있을 경우 값이 변경될 때마다 실행

  const handleInsert = (value) => {
    // const todo = {is:todo.length+!, text: value, cheked: false};
    const todo = {id: Date.now(), text:value, checked:false};
    setTodos([...todos,todo]);
  }
  // const handleInsert = useCallback((value) => {
  //   //  const todo = {is:todo.length+!, text: value, cheked: false};
  //   const todo = {id: Date.now(), text:value, checked:false};
  //   setTodos((prev)=>{return [...prev,todo]});
  // },[]);

  const handleChecked = (id) => {
    const toggle = todos.map((list)=>{
      return(list.id === id) ? {...list,checked:!list.checked} : list;
    })
    //id:list.id, text:list.text, checked:list.checked => ...list
    setTodos(toggle);
    // setTodos(
    //   todos.map((list)=>{
    //     return list.id === id ? {...list, checked:!list.checked} : list
    //   })
    // );
    
  }

  const handleDelete = (id) =>{
    //id만 제외하고 다시 todo 배열을 구성
    const result = todos.filter((list)=>{
      return list.id !== id;
    });
    setTodos(result);
  }
  return (
    <div className="app">
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos} onChecked={handleChecked} onRemove={handleDelete}/>
      </TodoTemplate>
    </div>
  );
};

export default App;