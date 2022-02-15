import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from './counterSlice';
import { increment, decrement } from './counterSlice';

export default function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    )
}