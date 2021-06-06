import React, { useState, useCallback } from 'react'
import '../02-useEffect/simpleForm.css'
import ShowIncrement from './ShowIncrement';
const CallbackHooks = () => {

    const [counter, setcounter] = useState(10);

    // const increment = () => {
    //     setcounter(counter + 1)
    // }

    const increment = useCallback(
        (num) => {
            setcounter(c => c + num)
        },
        // eslint-disable-next-line
        [setcounter],
    )
    return (
        <div>
            <h1>useCallback hook: { counter}</h1>
            <hr />

            <ShowIncrement increment={increment}/>
        </div>
    )
}

export default CallbackHooks
