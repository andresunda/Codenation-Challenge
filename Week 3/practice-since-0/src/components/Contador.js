import React, { useState, Fragment } from 'react';

export const Contador = () => {
    // Declara una nueva variable de estado, que llamaremos "count".
    const [count, setCount] = useState(0);

    return (
        <Fragment>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </Fragment>
    );
}
