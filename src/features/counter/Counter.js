import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from './counterSlice';
import { increment, decrement, incrementByAmount } from './counterSlice';
import styles from './Counter.module.css';

export default function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

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
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Add Amount
                </button>
            </div>
        </div>
    )
}