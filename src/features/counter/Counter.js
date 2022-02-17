import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from './counterSlice';
import { increment, decrement } from './counterSlice';
import styles from './Counter.module.css';

export default function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}