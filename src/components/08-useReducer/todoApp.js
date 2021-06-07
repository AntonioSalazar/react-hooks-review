import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import  useForm  from '../../hooks/useForm';
import './styles.css'




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
            <ul className='list-group list-group-flush'>
                {
                    todos.map((todo, i) => (
                        <li key={todo.id} className='list-group-item'>
                            <p className="text-center">
                                {i + 1} {todo.desc}
                            </p>   
                            <button className="btn btn-danger">Borrar</button>
                        </li>
                    ))
                }
            </ul>
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
