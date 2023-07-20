import React, { useEffect, useReducer, useRef } from 'react'

const initialState = {
    counter: 0,
    name: ""
}

const actions = {
    INCREMENT: "increment",
    SET_NAME: "set_name"
}

const counterReducer = (state, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return { ...state, counter: state.counter + 1 }
        case actions.SET_NAME:
            return { ...state, name: action.payload }
        default:
            return state
    }
}

export const ReducerState = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    const { counter, name } = state

    const inputRef = useRef(null)

    useEffect(() => {
        // if (counter === 2) {
        //     console.log("Anda sudah mencapai targer");
        // }
        console.log(inputRef.current);
    }, [inputRef.current])

    const debounceRef = useRef(null)

    const onChange = (e) => {
        if (debounceRef.current) clearTimeout(debounceRef.current)
        debounceRef.current = setTimeout(() => {
            console.log(e.target.value);
        }, 800)
    }
    return (
        <div>
            <h1 className='bg-indigo-400 p-4 font-bold'>
                ReducerState
            </h1>
            <input onChange={onChange} />
            <p>{counter}</p>
            <p>{name}</p>
            <button className='p-2 bg-slate-800 text-white rounded-sm' onClick={() => { dispatch({ type: actions.INCREMENT }); dispatch({ type: actions.SET_NAME, payload: "Budi" }); }}>Add Action</button>
        </div>
    )
}
