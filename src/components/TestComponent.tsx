import React, { useState } from 'react';
// a basic example of using useState with TypeScript


const TestComponent: React.FC=()=>{
    const defaultName: string = "Trogdor!";
    const [ name, setName ] = useState< string | null>();

    return(
        <div>
            <h3>TypeScript/React: The basic implementation of useState </h3>
            <div>The current name is: { name } </div>
            <button onClick={ ()=>{!name ? setName(defaultName) : setName(null)} } > Change Name </button>
        </div>
    );
}

export default TestComponent;

