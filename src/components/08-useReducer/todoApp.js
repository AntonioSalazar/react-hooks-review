import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import  useForm  from '../../hooks/useForm';
import './styles.css'
import TodoList from './TodoList';




const init  = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'aprender react',
    //     done: false
    // }]

    return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const [{description}, handleInputChange, resetValues] = useForm({
        description: ''
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = todoId => {


        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action)
    }

    const handleToggle = todoId => {
        dispatch({
            type: 'toogle',
            payload: todoId
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action)
        resetValues()
    }

    return (
        <div>
            <h1>ToDo App ({todos.length})</h1>
            <hr />
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />

            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input type="text" value={description} name='description' placeholder='Aprender....' autoComplete='off' className='form-control'  onChange={handleInputChange}/>
                    <button type='submit' className="btn btn-outline-success mt-3 btn-block">Agregar</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default TodoApp
