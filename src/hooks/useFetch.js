import  { useState, useEffect } from 'react';
const useFetch = (url) => {

    const [state, setState ] = useState({data: null, loading: true, error: null})
    
    const apiCall = async () => {
        try {
            let data = await fetch(url);
            let response = await data.json()
            setState({
                data: response,
                loading: false,
                error: null
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        setState({data: null, loading:true, error: null})
        apiCall()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return state
}

export default useFetch
