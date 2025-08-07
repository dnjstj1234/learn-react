import { useReducer, useState } from 'react';
import './App.css'
import TodoList from './components/todo/TodoList';
import todoReducer from './reducer/todo-reducer';
import { useImmerReducer } from 'use-immer'

function AppTodo (props) {
    const [todoText, setTodoText] = useState('')
    const [todos, dispatch] = useImmerReducer(todoReducer, [
        { id: 0, text: "HTML&CSS 공부하기", done: false },
        { id: 1, text: "자바스크립트 공부하기", done: false },
    ])
    // const [todos, dispatch] = useReducer(todoReducer, [
    //     { id: 0, text: "HTML&CSS 공부하기", done: false },
    //     { id: 1, text: "자바스크립트 공부하기", done: false },
    // ])
    // const [todos, setTodos] = useState([
    //     { id: 0, text: "HTML&CSS 공부하기", done: false },
    //     { id: 1, text: "자바스크립트 공부하기", done: false },
    // ]);

    const handleTodoTextChange = (e) => {
        setTodoText(e.target.value);
    }

    const handelAddTodo = () => {
        // const nextId = todos.length;
        // setTodos([
        //     ...todos,
        //     { id: nextId, text: todoText }
        // ]);
        dispatch({
            type: 'added',
            nextId: todos.length,
            todoText
        });
        setTodoText('');
    }

    const handelDeleteTodo = (todoId) => {
        dispatch({
            type: 'deleted',
            deleteId: todoId
        })
        // const resultTodoList = todos.filter(todo => todo.id !== todoId);
        // setTodos([
        //     ...resultTodoList
        // ])
    }

    const handelKeyDown = (e) => {
        if(e.key === 'Enter') {
            handelAddTodo()
        }
    }

    const handleToggelTodo = (todoId, value) => {
        // const todoObj = todos.find(todo => todo.id === todoId);
        // todoObj.done = value;
        // setTodos([
        //     ...todos
        // ])
        // const nextTodos = todos.map(todo => {
        //     if(todo.id === todoId) {
        //         return { ...todo, done: value }
        //     }

        //     return todo
        // })

        // setTodos(nextTodos)
        dispatch({
            type: 'done',
            id: todoId,
            done: value
        })
    }

    // 배열 정렬 반대로 변경
    const handelReverse = () => {
        // const nextTodos = [...todos];
        // nextTodos.reverse();
        // setTodos(nextTodos);
        // setTodos(todos.toReversed())
        dispatch({
            type: 'reverse'
        })
    }

    return (
        <div>
            <h2>할 일 목록</h2>
            <input type="text" value={todoText} onChange={handleTodoTextChange} onKeyDown={handelKeyDown}/>
            <button onClick={handelAddTodo}>추가</button>
            <div>Preview: {todoText}</div>
            <button onClick={handelReverse}>Reverse</button>
            <TodoList todos={todos} onDeleteTodo={handelDeleteTodo} onToggelTodo={handleToggelTodo} />
        </div>
    )
}

export default AppTodo;