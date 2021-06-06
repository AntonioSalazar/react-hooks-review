import React from 'react'
import './multipleHooks.css'
import useFetch from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter'

const MultipleCustomHooks = () => {
    const {number, increment} = useCounter()
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${number}`)
    
    const { loading, data} = state;
    const { author, quote } = !!data && data[0]

    return (
        <div>
            <h1>Breaking bad quotes</h1>
            <hr />

            {
                loading 
                ?
                <div className="alert alert-info text-center">
                    ...Loading
                </div>
                :
                <blockquote className='blockquote text-right'>
                    <p className="mb-1">{quote}</p>
                    <footer className="blockquote-footer"> {author}</footer>
                </blockquote>
            }
            <button className="btn btn-success" onClick={increment}>Siguiente quote</button>
        </div>
    )
}

export default MultipleCustomHooks
