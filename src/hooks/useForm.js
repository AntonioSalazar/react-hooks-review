import {useState} from 'react'

const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const handleInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values);
    }

    return [
        values, handleInputChange, handleSubmit
    ]
}

export default useForm
